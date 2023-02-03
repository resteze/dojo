from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo
# app routes below

# view route to create nina


@app.route('/ninja')
def ninja():
    all_dojos = Dojo.get_dojos()
    return render_template('new.html', all_dojos= all_dojos)


@app.route('/ninja/create', methods=['post'])
def createNinja():
    Ninja.save(request.form)
    return redirect('/dojos')



