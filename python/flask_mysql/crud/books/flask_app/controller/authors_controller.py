from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.model.author import Author
from flask_app.model.book import Book

#view route for list of authors
@app.route('/authors')
def homePage():
    all_authors = Author.get_authors()
    return render_template('home.html', all_authors = all_authors)

#action route to create a author
@app.route('/authors/create', methods = ['post'])
def createAuthor():
    Author.save(request.form)
    return redirect(f'/authors')

@app.route('/authors/<int:id>')
def viewAuthor(id):
    this_Author = Author.get_faves({'id': id})
    print(this_Author)
    return render_template('specificBook.html', this_Author = this_Author)
