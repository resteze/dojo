from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app.models import user_model
from flask_app import DATABASE
from flask import flash 

class Sighting:
    def __init__(self, data):
        self.id = data['id']
        self.location = data['location']
        self.description = data['description']
        self.date = data['date']
        self.numofsaqs = data['numofsaqs']
        self.user_id = data['user_id']
#validate the sighting    
    @staticmethod
    def validate_sighting(data):
        is_valid = True
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

#get all sightings
    @classmethod
    def get_sightings(cls):
        query = "select * from sightings join users on users.id = sightings.user_id;" 
        results = connectToMySQL(DATABASE).query_db(query)
        sightingList = []
        if results:
            for row in results:
                sighting_data = cls(row)
                sightingList.append(sighting_data)
                data = {
                    **row,
                    'id': row['users.id']
                }
                this_user = user_model.User(data)
                sighting_data.postby = this_user
        return sightingList 

#get one sighting
    @classmethod
    def get_one(cls, data):
        query = """SELECT * from sightings 
                JOIN users on sightings.user_id = users.id WHERE sightings.id = %(id)s;
                """
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        this_sighting = cls(results[0])
        for row in results:
            data = {
                'id': row['users.id'],
                **row
            }
            this_user = user_model.User(data)
            this_sighting.postby = this_user
        return this_sighting

#edit sighting
    @classmethod
    def edit(self,data):
        query = " UPDATE sightings SET name = %(location)s, description = %(description)s, numOfSaqs = %(numofsaqs)s, date = %(date)s WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)

#saving sighting
    @classmethod
    def save(self,data):
        query = """INSERT into sightings 
        (user_id, location, description, numofsaqs, date ) 
        VALUES ( %(user_id)s, %(location)s , %(description)s, %(numofsaqs)s, %(date)s);"""
        return connectToMySQL(DATABASE).query_db(query, data)

#delete sighting
    @classmethod
    def delete(self,data):
        query = "DELETE FROM sightings WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)