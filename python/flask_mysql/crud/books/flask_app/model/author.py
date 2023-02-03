from flask_app.configs.mysqlconnection import connectToMySQL
class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorites = []

    @classmethod
    def save(cls, data):
        query = "INSERT into authors (name) VALUES ( %(name)s);"
        return connectToMySQL('books_schema').query_db(query, data)

    @classmethod
    def get_authors(cls):
        query = "SELECT * FROM authors;"
        results = connectToMySQL('books_schema').query_db(query)
        authors_instance = []
        for row in results:
            authors_instance.append(cls(row))
        return authors_instance
    
    @classmethod
    def get_faves(cls, data):
        query = "SELECT * FROM books LEFT JOIN favories ON favorites.book_id = books.id LEFT JOIN authors ON favorites.author_id = authors.id WHERE book.id = %(id)s;" 
        results = connectToMySQL('books_schema').query_db(query, data)
        favBook = cls(results[0])
        for row in results:
            fav_data = { **row }
        favBook.favorites.append( Author( fav_data ) )
        return favBook