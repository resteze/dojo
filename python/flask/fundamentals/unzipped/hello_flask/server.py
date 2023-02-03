from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
    # import statements, maybe some other routes
@app.route('/dojo')
def dojo():
    return "Dojo"
@app.route('/say/<string:name>') # for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
def say(name):
    print(name)
    return "Hi " + name.capitalize() +"!"
@app.route('/repeat/<int:times>/<string:word>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(times, word):
    if times != int or word != str:
        return("Sorry! No response. Try again")
    else:
        return(word * times)
    
# app.run(debug=True) should be the very last statement! 
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port=5001)
        # Run the app in debug mode.
