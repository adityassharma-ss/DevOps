from flask import Flask, render_template, request, flash, redirect, url_for

import requests
import os

app = Flask(__name__)
app.secret_key = 'thisisjustarandomstring'


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        if request.form['submit_button'] == 'Test connection':
            ret = os.system('ping welcome-service -w 1')
            if ret == 0:
                flash('The test was successful', "green")
                return redirect(url_for("test"))
            else:
                flash('The test failed. Welcome-service is not UP', "red")
                return redirect(url_for("index"))

        elif request.form['submit_button'] == 'Reset':
            return redirect(url_for("index"))
        else:
            pass
    return render_template('index.html')


@app.route('/test', methods=['POST', 'GET'])
def test():
    if request.method == "POST":
        if request.form['submit_button'] == 'Reset':
            return redirect(url_for("index"))
        elif request.form['submit_button'] == 'Get Message':
            data = requests.get('http://welcome-service:5051').json()
            flash(str(data), "green")
            return redirect(url_for('test'))
        else:
            pass
    return render_template('test_service.html')


if __name__ == '__main__':
    app.run(debug=True, port=5050, host="0.0.0.0")