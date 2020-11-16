import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Card({ data }) {
  // console.log(data.owner.account.avatar.hasOwnProperty("url"));
  const avatar = Object.keys(data.owner.account);
  console.log(avatar.indexOf("avatar"));
  return (
    <Link className="card-container" to={data._id ? `/offer/${data._id}` : "/"}>
      <div className="card-avatarusername">
        {avatar.indexOf("avatar") !== -1 ? (
          <img
            className="card-avatar-img"
            src={data.owner.account.avatar.url}
            alt=""
          />
        ) : (
          ""
        )}

        <span className="card-avatar-title">{data.owner.account.username}</span>
      </div>
      <div className="card-container-image-infos">
        <img className="card-image" src={data.product_image.url} alt=""></img>
        <div className="card-size-price-brand">
          <span className="card-price">{data.product_price} €</span>
          <span className="card-size">{data.product_details[1].TAILLE}</span>
          <span className="card-brand">{data.product_name.toUpperCase()}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
// ${elem._id}
