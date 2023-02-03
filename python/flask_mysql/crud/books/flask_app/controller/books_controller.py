from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.model.author import Author
from flask_app.model.book import Book

#view route for list of books
@app.route('/books')
def bookPage():
    all_books = Book.get_books()
    return render_template('books.html', all_books = all_books)

#action route to create a book
@app.route('/books/create', methods = ['post'])
def createBook():
    new_book_id = Book.save(request.form)
    return redirect(f'/books/{new_book_id}')

@app.route('/books/<int:id>')
def viewBook(id):
    this_Book = Book.get_favdby({'id': id})
    print(this_Book)
    return render_template('specificBook.html', this_Book = this_Book)
