from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app.models import sighting_model
from flask_app import DATABASE
from flask import flash 
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

#validate registration
    @staticmethod
    def validate_userReg(data):
        is_valid = True
        email_in_db = User.get_by_email(data['email'])
        if len(data['first_name']) < 3 or data['first_name'] == "":
            flash('First name must be at least 3 characters.', 'first_name')
            is_valid = False

        if len(data['last_name']) < 3 or data['last_name'] == "":
            flash('Last name must be at least 3 characters.', 'last_name')
            is_valid = False

        if not EMAIL_REGEX.match(data['email']): 
            flash("Invalid email address.", 'email')
            is_valid = False

        else:
            email_dict = {
                'email': data['email']
            }
            potential_user = User.get_by_email(email_dict)
            if potential_user:
                is_valid = False
                flash('Email is already taken.')

        if len(data['password']) < 8 or data['password'] == "":
            flash('Password must be at least 8 characters.', 'password')
            is_valid = False

        if data['password'] != data['confirmPassword']:
            flash('Password dont match.', 'confirmPassword')
            is_valid = False
        return is_valid

#get all users
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(DATABASE).query_db(query)
        users_instance = []
        for row in results:
            this_user = cls(row)
            users_instance.append(this_user)
        return users_instance

#saving
    @classmethod
    def save(self,data):
        query = "INSERT into users (first_name, last_name, email, password) VALUES ( %(first_name)s, %(last_name)s , %(email)s, %(password)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

#get user by email
    @classmethod
    def get_by_email(cls, data):
        query = 'SELECT * FROM users WHERE email = %(email)s;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        if not results:
            return False
        return cls(results[0])

#get user by id
    @classmethod
    def get_by_id(cls, data):
        query = 'SELECT * FROM users WHERE id = %(id)s;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        if not results:
            return False
        return cls(results[0])
    

