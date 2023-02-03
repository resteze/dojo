from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app.models import user_model
from flask_app import DATABASE
from flask import flash 

class Event:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.location = data['location']
        self.date = data['date']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.attendees = Event.getAttendees({'events.id':data['id']})
        #downside
#validate the event   
    @staticmethod
    def validate_event(data):
        is_valid = True
        if len(data['name']) < 3 or data['name'] == "":
            flash('Name must be at least 3 characters.', 'name')
            is_valid = False
        if len(data['location']) < 3 or data['location'] == "":
            flash('Location must be at least 3 characters.', 'location')
            is_valid = False
        if len(data['description']) < 3 or data['description'] == "":
            flash('Description must be at least 3 characters.', 'description')
            is_valid = False
        if data['date'] == "":
            flash('Must pick a date', 'date')
            is_valid = False  
        return is_valid

#get all events
    @classmethod
    def get_events(cls):
        query = "select * from events join users on users.id = events.user_id;" 
        results = connectToMySQL(DATABASE).query_db(query)
        eventList = []
        if results:
            for row in results:
                event_data = cls(row)
                eventList.append(event_data)
                data = {
                    **row,
                    'id': row['users.id'],
                    'created_at': row['users.created_at'],
                    'updated_at': row['users.updated_at']
                }
                this_user = user_model.User(data)
                event_data.postby = this_user
        return eventList 

#get one event
    @classmethod
    def get_one(cls, data):
        query = """SELECT * from events 
                JOIN users on events.user_id = users.id WHERE events.id = %(id)s;
                """
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        this_event = cls(results[0])
        for row in results:
            data = {
                'id': row['users.id'],
                **row
            }
            this_user = user_model.User(data)
            this_event.postby = this_user
        return this_event

#edit events
    @classmethod
    def edit(self,data):
        query = " UPDATE events SET name = %(location)s, name = %(name)s, description = %(description)s, date = %(date)s WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)

#saving events
    @classmethod
    def save(self,data):
        query = """INSERT into events 
        (user_id, name, location, description, date ) 
        VALUES ( %(user_id)s, %(name)s, %(location)s , %(description)s, %(date)s);"""
        return connectToMySQL(DATABASE).query_db(query, data)

#delete events
    @classmethod
    def delete(self,data):
        query = "DELETE FROM events WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

#add attendee
    @classmethod
    def addAttendee(cls, data):
        query = 'insert into attendees (user_id, event_id) values(%(user_id)s, %(event_id)s)'
        return connectToMySQL(DATABASE).query_db(query,data)

#remove attendee
    @classmethod
    def deleteAttendee(cls,data):
        query = 'delete from attendees where user_id = %(user_id)s and event_id = %(event_id)s'
        return connectToMySQL(DATABASE).query_db(query,data)

#get attendees for 1 party
    @classmethod
    def getAttendees(cls, data):
        query = 'select * from events left join attendees on events.id = attendees.event_id left join users on users.id = attendees.user_id where events.id = %(events.id)s'
        results = connectToMySQL(DATABASE).query_db(query, data)
        attendeesList = []
        for row in results:
            # if row['event.id'] in results == None:
            #     return []
            data = {
                **row,
                'id': row['users.id'],
                'created_at': row['users.created_at'],
                'updated_at': row['users.updated_at']
            }
        this_user = user_model.User(data)
        attendeesList.append(this_user)
        return attendeesList
