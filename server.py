import os
from flask import Flask, render_template, request, url_for, send_from_directory
import stripe

stripe.api_key = os.environ['STRIPE_KEY']
# TODO take google analytics key from env and serve in prod


app = Flask(__name__)

@app.route('/')
def base():
    return render_template('index.html')


@app.route('/<path:path>')
def send_htmls(path):
    return send_from_directory('templates', path)

# TODO actual logging
# Route that will process the file upload
@app.route('/charge', methods=['POST'])
def donation():
    print('CHARGING CARD')
    # read the audio book from the page
    print(request.form)
    stripeToken = request.form['stripeToken']
    stripeEmail = request.form['stripeEmail']
    try:
        stripe.Charge.create(
          amount=100,
          currency="usd",
          source=stripeToken, # obtained with Stripe.js
          description="Charge for "+ stripeEmail
        )
        pass
    except (stripe.error.CardError, e):
        # Since it's a decline, stripe.error.CardError will be caught
        body = e.json_body
        err  = body['error']

        print("Status is: %s" % e.http_status)
        print("Type is: %s" % err['type'])
        print("Code is: %s" % err['code'])
        # param is '' in this case
        print("Param is: %s" % err['param'])
        print("Message is: %s" % err['message'])
    except (stripe.error.InvalidRequestError, e):
        # Invalid parameters were supplied to Stripe's API
        print(e)
        pass
    except (stripe.error.AuthenticationError, e):
        # Authentication with Stripe's API failed
        # (maybe you changed API keys recently)
        print(e)
        pass
    except (stripe.error.APIConnectionError, e):
        # Network communication with Stripe failed
        print(e)
        pass
    except (stripe.error.StripeError, e):
        print(e)
        pass
    except (Exception, e):
        # Something else happened, completely unrelated to Stripe
        print(e)
        pass
    # return render_template('do we need to render again?', paid=True)


app.run(host='0.0.0.0',
        port=int(os.getenv('PORT', 5000)))
