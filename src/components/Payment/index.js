import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./index.css";
import axios from "axios";
import Cookie from "js-cookie";

const Payment = ({ token, productData }) => {
  const [completed, setcompleted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const price = productData.product_price;
  const fraisPortection = (productData.product_price * 0.1).toFixed(2);
  const fraisPort = (productData.product_price * 0.2).toFixed(2);
  const total = Number(price) + Number(fraisPortection) + Number(fraisPort);
  const totalCentimes = Number(total) * 100;
  const id = Cookie.get("id");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    try {
      const stripeResponse = await stripe.createToken(cardElement, {
        name: id,
      });
      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: productData.product_name,
          amount: totalCentimes,
        }
      );
      if (response.data.status === "succeeded") {
        setcompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="payment-container-body">
      <div className="payment-container">
        <div className="payment-resume">
          <h4 className="paymenth4">Résumé de ma commande</h4>
          <div className="payment-commande-container">
            <ul className="payment-commande-list">
              <li>
                <span>Commande</span> <span>{price} €</span>
              </li>
              <li>
                Frais protection acheteurs
                <span>{fraisPortection} €</span>
              </li>
              <li>
                Frais de port
                <span>{fraisPort} €</span>
              </li>
            </ul>
          </div>

          <div className="payment-divider"></div>

          <div className="payment-total-container">
            <div className="payment-total-contenu">
              <span className="span-bold">
                {completed ? "Total réglé" : "Total"}
              </span>
              <span className="span-bold">{Number(total).toFixed(2)} €</span>
            </div>
          </div>
          <div className="payment-card">
            {completed ? (
              <div className="payment-text">
                La livraion de l'article
                <span className="span-bold"> {productData.product_name} </span>
                sera effectuée sous 48h.
              </div>
            ) : (
              <div className="payment-text">
                Il ne vous reste plus qu'une étape pour vous offrir
                <span className="span-bold"> {productData.product_name}</span> .
                Vous allez payer <span className="span-bold">{total}</span> €
                (frais de protection et frais de port inclus).
              </div>
            )}

            <div className="payment-divider2"></div>

            <form className="payment-form" onSubmit={handleSubmit}>
              <CardElement className="payment-stripe" />

              {completed ? (
                <div className="payment-form-completed">
                  Merci de votre achat{" "}
                </div>
              ) : (
                <button className="payment-form-button" type="submit">
                  {" "}
                  Pay
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
