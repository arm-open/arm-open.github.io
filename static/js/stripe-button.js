$(document).ready(function(){

  $.getScript("https://checkout.stripe.com/checkout.js", function()
  {
    console.log("stripe checkout script ready");

    var handler = StripeCheckout.configure({
      key: 'pk_test_mlBqEQWc5FR1hGVCPuBH1kgy',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
    $("#stripeToken").val(token.id);
    $("#stripeEmail").val(token.email);
    $("#stripe-form").submit();
      }
    });

    $('#stripe-button').on('click', function (e) {
      console.log("button clicked 2");
    //alert("button clicked 2");
    // Open Checkout with further options
    handler.open({
      name: 'ARM New Brunswick',
      description: 'armnewbrunswick.org',
      amount: 100,
      panelLabel: 'Donate',
      zipCode: true,
      allowRememberMe: false,
      bitcoin:true
      });
    e.preventDefault();
    });

    // Close Checkout on page navigation
    $(window).on('popstate', function () {
      console.log("closed");
      handler.close();
    });

    //alert('actually ready');

  });

});