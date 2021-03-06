import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const PageOffer = ({ data, setisPageHome }) => {
  setisPageHome(false);
  const avatar = Object.keys(data.owner.account);

  return (
    <div className="Offer-container-body">
      <div className="offer-contenu">
        <img className="offer-img" src={data.product_image.url} alt=""></img>
        <div className="offer-description">
          <div className="offer-brand-size">
            <span className="offer-price">{data.product_price} €</span>
            <ul className="offer-ul">
              {data.product_details.map((elem, i) => {
                return (
                  <li key={i}>
                    <span className="offer-span gris-clair">
                      {Object.keys(data.product_details[i])}
                    </span>
                    <span className="offer-span gris-fonce">
                      {Object.values(data.product_details[i])}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="offer-trait"></div>
          <div className="offer-content">
            <div className="offer-name">{data.product_name}</div>
            <div className="offer-desc">{data.product_description}</div>
            <div className="offer-avatar">
              {avatar.indexOf("avatar") !== -1 ? (
                <img
                  className="offer-avatar-img"
                  src={data.owner.account.avatar.url}
                  alt="avatar"
                />
              ) : (
                ""
              )}

              <span className="offer-username-title">
                {data.owner.account.username}
              </span>
            </div>
          </div>

          <Link
            to={{
              pathname: "/payment",
              state: { productData: data },
            }}
          >
            <button className="offer-button">Acheter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageOffer;
