from flask import Flask, redirect,render_template, session
app = Flask(__name__)
app.secret_key = 'imthebiggestbird'

@app.route('/')
def clickRefresh():
    if 'counter' not in session:
        session['counter'] = 0
    session['counter'] += 1
    return render_template('index.html')

# @app.route('/2')
# def clickRefresh2():
#     if 'counter' not in session:
#         session['counter'] = 0
#     session['counter'] += 2
#     return render_template('index.html') 

@app.route('/<int:x>')
def clickRefresh2(x):
    if 'counter' not in session:
        session['counter'] = 0
    session['counter'] += x
    return render_template('index.html') 

@app.route('/destroysession')
def destroyCookies():
    session.clear()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug = True)