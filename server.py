import os
from flask import Flask, render_template, request, url_for, send_from_directory
import stripe

GA_ID = os.environ['GA_ID']

stripe_keys = {
  'secret_key': os.environ['STRIPE_SECRET_KEY'],
  'publishable_key': os.environ['STRIPE_PUBLISHABLE_KEY']
}
stripe.api_key = stripe_keys['secret_key']

app = Flask(__name__)

# add environment variables to flask config object
app.config.update(os.environ)

@app.route('/')
def base():
    return render_template('index.html')

@app.route('/<path:path>')
def send_htmls(path):
    return send_from_directory('templates', path)

@app.route('/donation_successful')
def donation_page():
    return render_template('donation_successful.html')

@app.route('/about_us')
def about_us_page():
    return render_template('about_us.html')


@app.route('/credentials/<cred_type>')
def credential_return(cred_type):
    if cred_type == 'publishable_key':
        return os.environ['STRIPE_PUBLISHABLE_KEY'];

app.run(host='0.0.0.0',
        port=int(os.getenv('PORT', 5000)),
        debug=int(os.getenv('DEBUG', 1)))
