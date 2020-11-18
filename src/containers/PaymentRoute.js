import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Payment from "../components/Payment";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
const PaymentRoute = ({ token, setisPageHome }) => {
  setisPageHome(false);
  const location = useLocation();
  const productData = location.state.productData;

  return token ? (
    <Elements stripe={stripePromise}>
      <Payment productData={productData} token={token} />
    </Elements>
  ) : (
    <Redirect to="/signin" />
  );
};

export default PaymentRoute;
