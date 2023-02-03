from flask_app import app
from flask import render_template,redirect,request,session,flash
from models.user import User

#view route
@app.route('/users')
def showUsers():
    all_users = User.get_all()
    print(all_users)
    return render_template('read.html', all_users = all_users)

#view route for form
@app.route('/users/new')
def addUser():
    return render_template('create.html')

#view route for specific profile
@app.route('/users/<int:id>')
def showUser(id):
    this_User = User.get_one({'id': id})
    return render_template('readOne.html', this_User = this_User)

#view route for editing a specific profile
@app.route('/users/<int:id>/edit')
def editUser(id):
    this_User = User.get_one({'id': id})
    return render_template('edit.html', this_User = this_User)


#action route to save form data
@app.route('/users/create', methods = ['post']) 
def createUser():
    new_user_id = User.save(request.form)
    return redirect(f'/users/{new_user_id}')

#action route
@app.route('/users/<int:id>/delete')
def delete(id):
    User.delete({'id': id})
    return redirect ('/users')