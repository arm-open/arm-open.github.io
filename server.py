import os
from flask import Flask, render_template, request, url_for
app = Flask(__name__)

@app.route('/')
def base():
    return render_template('index.html')

app.run(
        host='0.0.0.0',
        port=int(os.getenv('PORT', 5000))
        )
