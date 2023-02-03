from flask_app.controllers import users

app = Flask(__name__)
app.secret_key = 'whatstheword'

if __name__ == '__main__':
    app.run(debug=True)