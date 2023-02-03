from flask import Flask, render_template 
app = Flask(__name__)   

# @app.route('/play')
# def play():   
#     return render_template('index.html')

# @app.route('/play/<int:x>')
# def howMany(x):
#     return render_template('index2.html', x = x)

@app.route('/play')
@app.route('/play/<int:x>')
@app.route('/play/<int:x>/<color>')  
def colorx(x= 3,color = 'blue'):
    return render_template('index3.html', x = x, color = color)

if __name__=="__main__":  
    app.run(debug=True, port=5001)    

