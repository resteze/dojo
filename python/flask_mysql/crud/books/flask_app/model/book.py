from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app.model import author, book

class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorites = []

    @classmethod
    def save(cls,data):
        query = "INSERT into books (title, num_of_pages) VALUES ( %(title)s, %(num_of_pages)s);"
        return connectToMySQL('books_schema').query_db(query, data)

    @classmethod
    def get_books(cls):
        query = "SELECT * FROM books;"
        results = connectToMySQL('books_schema').query_db(query)
        books_instance = []
        for row in results:
            books_instance.append(cls(row))
        return books_instance

    @classmethod
    def get_favdby(cls, data):
        query = "SELECT * FROM authors LEFT JOIN favories ON favorites.author_id = books.id LEFT JOIN books ON favorites.book_id = books.id WHERE authors.id = %(id)s;" 
        results = connectToMySQL('books_schema').query_db(query, data)
        favBook = cls(results[0])
        for row in results:
            fav_data = { **row }
        favBook.favorites.append( author.Author( fav_data ) )
        return favBook