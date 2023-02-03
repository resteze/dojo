from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app.models import user_model
from flask_app import DATABASE
from flask import flash, request
class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.under30 = data['under30']
        self.date = data['date']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

#get all recipes
    @classmethod
    def get_recipes(cls):
        query = "select * from recipes join users on users.id = recipes.user_id;" 
        results = connectToMySQL(DATABASE).query_db(query)
        print(results)
        recipeList = []
        if results:
            for row in results:
                recipe_data = cls(row)
                recipeList.append(recipe_data)
                data = {
                    **row,
                    'id': row['users.id'],
                    'created_at': row['users.created_at'],
                    'updated_at': row['users.updated_at']
                }
                this_user = user_model.User(data)
                recipe_data.postby = this_user
        return recipeList 

#get one recipe
    @classmethod
    def get_one(cls, data):
        query = """SELECT * from recipes 
                JOIN users on recipes.user_id = users.id WHERE recipes.id = %(id)s;
                """
                
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        this_recipe = cls(results)
        for row in results:
            data = {
                'id': row['users.id'],
                'created_at': row['users.created_at'],
                'updated_at' : row['users.updated_at'],
                **row
            }
            this_user = user_model.User(data)
            this_recipe.postby = this_user
        return this_recipe

#edit recipe
    @classmethod
    def edit(self,data):
        query = " UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, under30 = %(under30)s, date = %(date)s WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)

#saving recipe
    @classmethod
    def save(self,data):
        query = """INSERT into recipes 
        (user_id, name, description, instructions, under30, date ) 
        VALUES ( %(user_id)s, %(name)s , %(description)s, %(instructions)s, %(under30)s, %(date)s);"""
        return connectToMySQL(DATABASE).query_db(query, data)

#delete recipe
    @classmethod
    def delete(self,data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

#validation for recipe
    @staticmethod
    def validate_recipe(data):
        is_valid = True
        if len(data['name']) < 3 or data['name'] == "":
            flash('Name must be at least 3 characters.', 'name')
            is_valid = False
        if len(data['description']) < 3 or data['description'] == "":
            flash('Description must be at least 3 characters.', 'description')
            is_valid = False
        if len(data['instructions']) < 3 or data['instructions'] == "":
            flash('Instructions must be at least 3 characters.', 'instructions')
            is_valid = False    
        if 'under30' not in data:
            flash('Must have under 30.', 'under30')
            is_valid = False
        if data['date'] == "":
            flash('Must pick a date', 'date')
            is_valid = False  
        return is_valid
        
