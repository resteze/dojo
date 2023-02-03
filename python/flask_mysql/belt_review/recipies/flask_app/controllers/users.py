from flask_app import app
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app) 
from flask import render_template, redirect, request, session, flash
from flask_app.models import user_model, recipe_model

#view route for home page
@app.route('/')
def home():
    return render_template('home.html')

#action route for registering
@app.route('/register', methods = ['post'])
def register():
    if not user_model.User.validate_userReg(request.form) == True:
        # we redirect to the template with the form.
        return redirect('/')
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    data = {
        **request.form,
        'password': pw_hash
    }
    user_id = user_model.User.save(data)
    session['user_id'] = user_id
    return redirect('/recipes')

#action route for logging in
@app.route('/login', methods = ['post'])
def login():
    data = {
        'email': request.form['email']
    }
    user_in_db = user_model.User.get_by_email(data)
    if not user_in_db:
        flash('Invalid credentials', 'log')
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash('Invalid credentials', 'log')
        return redirect('/')
    session['user_id'] = user_in_db.id
    logged_user = user_model.User.get_by_id(data)
    return redirect('/recipes')

#action route for logging out
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

#view route for viewing all users recipes
@app.route('/recipes')
def userRecipes():
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    all_recipes = recipe_model.Recipe.get_recipes()
    logged_user = user_model.User.get_by_id(data)
    return render_template('viewRecipes.html', logged_user = logged_user, all_recipes = all_recipes)

