from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    print(request.form)
    count = request.form.get('apple',type = int) + request.form.get('raspberry',type = int) + request.form.get('strawberry',type = int)
    print(f"Charging {request.form['first_name']} for {count} fruits")
    return render_template("checkout.html")

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True) 