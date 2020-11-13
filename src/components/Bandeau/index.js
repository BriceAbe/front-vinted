import React from "react";
import "./index.css";
import dechirer from "./dechirer.svg";

const bandeau = () => {
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
              <button className="bandeau-card-button">
                Commencer à vendre
              </button>
            </div>
          </div>
        </div>
        <div className="bandeau-img-dechirer"></div>
      </div>
    </div>
  );
};

export default bandeau;
