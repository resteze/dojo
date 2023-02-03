from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models import event_model, user_model

#view route for editing event
@app.route('/edit/<int:id>')
def editEvent(id):
    #! route guard
    if 'user_id' not in session:
        return redirect('/signin')
    this_event = event_model.Event.get_one({'id': id})
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('editEvent.html', logged_user = logged_user, this_event = this_event)

#action route for editing event
@app.route('/editEvent', methods = ['post'])
def changeEvent():
    #! route guard
    if 'user_id' not in session:
        return redirect('/signin')
    if not event_model.Event.validate_Event(request.form):
        return redirect(f"/edit/{request.form['id']}")
    data = {
        **request.form,
    }
    event_model.Event.edit(request.form)
    return redirect('/events')


#view route for adding event
@app.route('/newEvent')
def addEvent():
    #! route guard
    if 'user_id' not in session:
        return redirect('/signin')
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('newEvent.html', logged_user = logged_user)

#action route for adding event
@app.route('/createEvent', methods = ['post'])
def createEvent():
    #! route guard
    if 'user_id' not in session:
        return redirect('/signin')
    if not event_model.Event.validate_event(request.form):
        return redirect("/newEvent")
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    event_model.Event.save(data)
    return redirect('/events')

#action route for deleting event
@app.route('/delete/<int:id>')
def delete(id):
    #! route guard
    if 'user_id' not in session:
        return redirect('/signin')
    data = {
        'id':id
    }
    event_model.Event.delete(data)
    return redirect ('/events')

#view route for event detail on specific event
@app.route('/event/<int:id>')
def eventDetails(id):
    #! route guard
    if 'user_id' not in session:
        return redirect('/signin')
    this_event = event_model.Event.get_one({'id': id})
    data = {
        'id': session['user_id']
    }
    logged_user = user_model.User.get_by_id(data)
    return render_template('event.html', logged_user = logged_user, this_event = this_event)

#action to attend
@app.route('/attend/<int:id>')
def attend(id):
    #! route guard
    if 'user_id' not in session:
        return redirect('/signin')
    data = {
            'user_id': session['user_id'],
            'event_id': id
        }
    event_model.Event.addAttendee(data)
    return redirect('/events')

#action to unattend
@app.route('/unattend/<int:id>')
def unattend(id):
    #! route guard
    if 'user_id' not in session:
        return redirect('/signin')
    data = {
            'user_id': session['user_id'],
            'event_id': id
        }
    event_model.Event.deleteAttendee(data)
    return redirect('/events')