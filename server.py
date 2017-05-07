import os
from flask import Flask, render_template, request, url_for, send_from_directory
import stripe

stripe_keys = {
  'secret_key': os.environ['STRIPE_SECRET_KEY'],
  'publishable_key': os.environ['STRIPE_PUBLISHABLE_KEY']
}
stripe.api_key = stripe_keys['secret_key']

GA_ID = os.environ['GA_ID']

app = Flask(__name__)

@app.route('/')
def base():
    print(stripe_keys['secret_key'])
    print(stripe_keys['publishable_key'])
    return render_template('index.html', GA_ID=GA_ID)

@app.route('/<path:path>')
def send_htmls(path):
    return send_from_directory('templates', path)

# TODO actual logging
# Route that will process the donation
@app.route('/charge', methods=['POST'])
def donation():
    print('CHARGING CARD')
    print("----form: ")
    print(request.form)
    print("----")

    # Amount in cents
    amount = 100
    token = request.form['stripeToken']
    email = request.form['stripeEmail']

    try:
        customer = stripe.Customer.create(
        email=email,
        source=token
    )

        charge = stripe.Charge.create(
        customer=customer.id,
        amount=amount,
        currency='usd',
        description="Donation from " + email
    )
        print("success")
        pass
    except stripe.error.CardError as e:
        # Since it's a decline, stripe.error.CardError will be caught
        body = e.json_body
        err  = body['error']

        print("Status is: %s" % e.http_status)
        print("Type is: %s" % err['type'])
        print("Code is: %s" % err['code'])
        # param is '' in this case
        print("Param is: %s" % err['param'])
        print("Message is: %s" % err['message'])
    except stripe.error.InvalidRequestError as e:
        # Invalid parameters were supplied to Stripe's API
        print(e)
        pass
    except stripe.error.RateLimitError as e:
        # Too many requests made to the API too quickly
        print(e)
        pass
    except stripe.error.AuthenticationError as e:
        # Authentication with Stripe's API failed
        # (maybe you changed API keys recently)
        print(e)
        pass
    except stripe.error.APIConnectionError as e:
        # Network communication with Stripe failed
        print(e)
        pass
    except stripe.error.StripeError as e:
        # Display a very generic error to the user, and maybe send
        # yourself an email
        print(e)
        pass
    except Exception as e:
        # Something else happened, completely unrelated to Stripe
        print(e)
        pass
    return render_template('charge.html', amount=amount)


#app.run(debug=True, host='localhost', port=int(os.getenv('PORT', 5000)))
app.run(host='0.0.0.0', port=int(os.getenv('PORT', 5000)))
