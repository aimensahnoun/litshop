import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const stripePrice = price * 100;
  const stripeKey =
    "pk_test_51HNDQVCQqsOyFJ666bpacwUuSaMJdTqeBqahhlYNYJTfEAm8YMdTqJffNat97kCH0q7hNJzmEpR6dMwp3NTwMDkF00COrPjbGk";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Lit Shop"
      billingAddress
      shippingAddress
      description={`Your totla is $${price}`}
      amount={stripePrice}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={stripeKey}
    />
  );
}

export default StripeButton;
