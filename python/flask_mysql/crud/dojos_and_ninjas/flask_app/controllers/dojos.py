from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.dojo import Dojo
# app routes below

# view route for home


@app.route('/dojos')
def homePage():
    all_dojos = Dojo.get_dojos()
    print(all_dojos)
    return render_template('home.html', all_dojos=all_dojos)


# action route to create dojo
@app.route('/dojos/create', methods=['post'])
def createDojo():
    Dojo.save(request.form)
    return redirect('/dojos')
    
# view route to show all ninjas in specific dojo
@app.route('/dojos/<int:id>')
def showNinjas(id):
    this_dojo = Dojo.get_ninjas({'id': id})
    print(this_dojo)
    return render_template('specificDojo.html', this_dojo = this_dojo)


