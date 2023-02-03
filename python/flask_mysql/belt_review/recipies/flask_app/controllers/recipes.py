from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models import recipe_model, user_model
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app) 

#view route for editing recipe
@app.route('/recipes/edit/<int:id>')
def editRecipe(id):
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    this_recipe = recipe_model.Recipe.get_one({'id': id})
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('changeRecipe.html', logged_user = logged_user, this_recipe = this_recipe)

#action route for editing recipe
@app.route('/changeRecipe', methods = ['post'])
def changeRecipe():
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    if not recipe_model.Recipe.validate_recipe(request.form):
        return redirect(f"/recipes/edit/{request.form['id']}")
    data = {
        **request.form,
    }
    recipe_model.Recipe.edit(request.form)
    return redirect('/recipes')


#view route for adding recipe
@app.route('/recipes/new')
def addRecipe():
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('newRecipe.html', logged_user = logged_user)

#action route for adding recipe
@app.route('/createRecipe', methods = ['post'])
def createRecipe():
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    if not recipe_model.Recipe.validate_recipe(request.form):
        return redirect("/recipes/new")
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    recipe_model.Recipe.save(data)
    return redirect('/recipes')

#action route for deleting recipe
@app.route('/recipes/delete/<int:id>')
def delete(id):
    data = {
        'id':id
    }
    recipe_model.Recipe.delete(data)
    return redirect ('/recipes')

#view route for recipe detail on specific recipe
@app.route('/recipes/<int:id>')
def recipeDetails(id):
    this_recipe = recipe_model.Recipe.get_one({'id': id})
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('recipe.html', logged_user = logged_user, this_recipe = this_recipe)