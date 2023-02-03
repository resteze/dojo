from flask_app.controller import authors_controller, books_controller
from flask_app import app

if __name__ == '__main__':
    app.run(debug=True)