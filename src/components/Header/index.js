import "./index.css";
import React from "react";
import logo from "./logo.png";
import Cookie from "js-cookie";
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({
  userToken,
  token,
  rechercheTitre,
  setrechercheTitre,
  tri,
  settri,
  prixMin,
  setprixMin,
  prixMax,
  setprixMax,
  isPageHome,
  setisPageHome,
}) {
  const history = useHistory();
  setisPageHome(true);
  const handleDeconnect = () => {
    userToken(null);
    history.push("/");
  };

  return token ? (
    <div className="App">
      <div
        className={
          isPageHome ? "header-container" : "header-container-not-home"
        }
      >
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <div className="header-search">
          <FontAwesomeIcon icon="search" color="grey" />
          <input
            className="header-search-input"
            placeholder="Recherche des articles"
            type="text"
            value={rechercheTitre}
            onChange={(e) => setrechercheTitre(e.target.value)}
          />
        </div>
        <div className="header-container-bouton">
          <button
            className="header-bouton-deconnecter"
            onClick={() => handleDeconnect()}
          >
            Se déconnecter
          </button>
        </div>
        <Link to="/publish">
          <button className="header-bouton green">Vends tes articles</button>
        </Link>
      </div>
      <div
        className={
          isPageHome
            ? "header-filter-container"
            : "header-filter-container-not-home"
        }
      >
        <select
          className="header-select"
          value={tri}
          onChange={(e) => settri(e.target.value)}
        >
          <option valeur="cro"> Tri Croissant</option>
          <option valeur="dec">Tri Décroissant</option>
        </select>

        <input
          className="header-filter"
          type="number"
          placeholder="Prix Min"
          value={prixMin}
          onChange={(e) => setprixMin(e.target.value)}
        />
        <input
          className="header-filter"
          type="number"
          placeholder="Prix Max"
          value={prixMax}
          onChange={(e) => setprixMax(e.target.value)}
        />
      </div>
    </div>
  ) : (
    <div className="App">
      <div
        className={
          isPageHome ? "header-container" : "header-container-not-home"
        }
      >
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <div className="header-search">
          <FontAwesomeIcon icon="search" color="grey" />
          <input
            className="header-search-input"
            placeholder="Recherche des articles"
            type="text"
            value={rechercheTitre}
            onChange={(e) => setrechercheTitre(e.target.value)}
          />
        </div>

        <div className="header-container-bouton">
          <Link to="/signup">
            <button className="header-bouton">S'inscrire</button>
          </Link>
          <Link to="/signin">
            <button className="header-bouton">Se connecter</button>
          </Link>
        </div>
        <Link to="/signin">
          <button
            onClick={() => Cookie.set("versVente", "yes")}
            className="header-bouton green"
          >
            Vends tes articles
          </button>
        </Link>
      </div>
      <div
        className={
          isPageHome
            ? "header-filter-container"
            : "header-filter-container-not-home"
        }
      >
        <select
          className="header-select"
          value={tri}
          onChange={(e) => settri(e.target.value)}
        >
          <option valeur="cro"> Tri Croissant</option>
          <option valeur="dec">Tri Décroissant</option>
        </select>

        <input
          className="header-filter"
          type="number"
          placeholder="Prix Min"
          value={prixMin}
          onChange={(e) => setprixMin(e.target.value)}
        />
        <input
          className="header-filter"
          type="number"
          placeholder="Prix Max"
          value={prixMax}
          onChange={(e) => setprixMax(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;
