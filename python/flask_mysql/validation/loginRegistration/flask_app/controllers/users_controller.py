from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import render_template, redirect, request, session, flash
from flask_app.models import user_model



@app.route('/')
def homePage():
    return render_template('login.html')

#logged in view route
@app.route('/dashboard')
def loggedIn():
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('dashboard.html', logged_user = logged_user)

@app.route('/logout')
def clearSession():
    session.clear()
    return redirect('/')

#Register User action route
@app.route('/register', methods = ['post'])
def createUser():
    if not user_model.User.validate_userReg(request.form):
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
    return redirect('/viewRe')

#Login User action route
@app.route('/login', methods = ['post'])
def logUser():
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
    return redirect('/dashboard/')
