import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

const bandeau = () => {
  const token = Cookie.get("token");
  return (
    <div className="App">
      <div className="bandeau-container">
        <div className="bandeau-container-card">
          <div className="bandeau-card">
            <div className="bandeau-card-wrapper">
              <div className="bandeau-card-text">
                <p className="bandeau-card-text-p">
                  Prêts à faire du tri dans vos placards ?
                </p>
              </div>

              {token ? (
                <Link to="/Publish">
                  <button
                    className="bandeau-card-button"
                    onClick={() => Cookie.remove("versVente")}
                  >
                    Commencer à vendre
                  </button>
                </Link>
              ) : (
                <Link to="/Signin">
                  <button
                    className="bandeau-card-button"
                    onClick={() => Cookie.set("versVente", "yes")}
                  >
                    Commencer à vendre
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="bandeau-img-dechirer"></div>
      </div>
    </div>
  );
};

export default bandeau;
