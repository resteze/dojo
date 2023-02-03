from flask import Flask, redirect, request, render_template, session
app = Flask(__name__)
app.secret_key = 'kawkaw'

@app.route('/')
def form():
    return render_template('index.html')

@app.route('/process', methods = ['post']) 
def createForm():
    session['processName'] = request.form['name']
    session['processLocation'] = request.form['location']
    session['processLanguage'] = request.form['language']
    session['processComment'] = request.form['comment']
    return redirect('/result')

@app.route('/result')
def result():
    return render_template('result.html')

if __name__ == '__main__':
    app.run(debug = True)