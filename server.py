import os
from flask import Flask, render_template, request, url_for, send_from_directory
app = Flask(__name__)

@app.route('/')
def base():
    return render_template('index.html')


@app.route('/<path:path>')
def send_htmls(path):
    return send_from_directory('templates', path)


app.run(host='0.0.0.0',
        port=int(os.getenv('PORT', 5000)))
