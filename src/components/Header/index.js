import "./index.css";
import React from "react";
import logo from "./logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
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
          <button className="header-bouton">S'inscrire</button>
          <button className="header-bouton">Se connecter</button>
        </div>
        <button className="header-bouton green">Vends articles</button>
      </div>
    </div>
  );
}

export default Header;
