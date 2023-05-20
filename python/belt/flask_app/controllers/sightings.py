from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models import sighting_model, user_model

#view route for editing sighting
@app.route('/edit/<int:id>')
def editSighting(id):
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    this_sighting = sighting_model.Sighting.get_one({'id': id})
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('editSighting.html', logged_user = logged_user, this_sighting = this_sighting)

#action route for editing sighting
@app.route('/changeSighting', methods = ['post'])
def changeSighting():
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    if not sighting_model.Sighting.validate_sighting(request.form):
        return redirect(f"/edit/{request.form['id']}")
    data = {
        **request.form,
    }
    sighting_model.Sighting.edit(request.form)
    return redirect('/dashboard')


#view route for adding sighting
@app.route('/sighting')
def addSighting():
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('createSighting.html', logged_user = logged_user)

#action route for adding sighting
@app.route('/createSighting', methods = ['post'])
def createSighting():
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    if not sighting_model.Sighting.validate_sighting(request.form):
        return redirect("/sighting")
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    sighting_model.Sighting.save(data)
    return redirect('/dashboard')

#action route for deleting sighting
@app.route('/delete/<int:id>')
def delete(id):
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    data = {
        'id':id
    }
    sighting_model.Sighting.delete(data)
    return redirect ('/dashboard')

#view route for sighting detail on specific sighting
@app.route('/show/<int:id>')
def sightingDetails(id):
    #! route guard
    if 'user_id' not in session:
        return redirect('/')
    this_sighting = sighting_model.Sighting.get_one({'id': id})
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('sighting.html', logged_user = logged_user, this_sighting = this_sighting)