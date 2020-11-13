import "./index.css";
import React from "react";
import logo from "./logo.png";
import Cookie from "js-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ userToken, token }) {
  const history = useHistory();
  const handleDeconnect = () => {
    userToken(null);
    history.push("/");
  };
  return token ? (
    <div className="App">
      <div className="header-container">
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <input
          className="header-search"
          placeholder="Recherche des articles"
          type="text"
        />
        <div className="header-container-bouton">
          <button
            className="header-bouton-deconnecter"
            onClick={() => handleDeconnect()}
          >
            Se déconnecter
          </button>
        </div>
        <Link to="/signin">
          <button className="header-bouton green">Vends tes articles</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="App">
      <div className="header-container">
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <input
          className="header-search"
          placeholder="Recherche des articles"
          type="text"
        />
        <div className="header-container-bouton">
          <Link to="/signup">
            <button className="header-bouton">S'inscrire</button>
          </Link>
          <Link to="/signin">
            <button className="header-bouton">Se connecter</button>
          </Link>
        </div>
        <Link to="/signin">
          <button className="header-bouton green">Vends tes articles</button>
        </Link>
        <div className="header-menu">
          <FontAwesomeIcon icon="bars" color=" #2eb0ba" size="2x" />
        </div>
      </div>
    </div>
  );
}

export default Header;
