import React from "react";
import "./index.css";

const bandeau = () => {
  return (
    <div className="App">
      <div className="bandeau-container">
        <div className="bandeau-container-card">
          <div className="bandeau-card">
            <div className="bandeau-card-wrapper">
              <div className="bandeau-card-text">
                Prêts à faire du tri dans vos placards ?
              </div>
              <button className="bandeau-card-button">
                Commencer à vendre
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bandeau;
