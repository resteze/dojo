from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('user_schema').query_db(query)
        users_instance = []
        for row in results:
            this_user = cls(row)
            users_instance.append(this_user)
        return users_instance
    
    @classmethod
    def save(cls, data):
        query = "INSERT into users ( first_name, last_name, email, created_at, updated_at) VALUES ( %(firstName)s , %(lastName)s , %(email)s, NOW(), NOW());"
        results = connectToMySQL('user_schema').query_db(query, data )
        return results

    @classmethod
    def get_one(cls, data):
        query = "SELECT * from users WHERE users.id = %(id)s;"
        results = connectToMySQL('user_schema').query_db(query, data)
        print(results)
        if results:
            return cls(results[0])
        return []
    
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM users WHERE users.id = %(id)s;"
        return connectToMySQL('user_schema').query_db(query, data)