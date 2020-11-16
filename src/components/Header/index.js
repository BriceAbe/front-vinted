import "./index.css";
import React, { useState } from "react";
import logo from "./logo.png";
import Cookie from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ userToken, token, recherche, setrecherche }) {
  const [menu, setmenu] = useState(false);

  const history = useHistory();

  const handleDeconnect = () => {
    userToken(null);
    history.push("/");
  };

  const handleMenu = () => {
    setmenu(true);
    console.log(1);
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
          value={recherche}
          onChange={(e) => setrecherche(e.target.value)}
        />
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
          value={recherche}
          onChange={(e) => setrecherche(e.target.value)}
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
          <button
            onClick={() => Cookie.set("versVente", "yes")}
            className="header-bouton green"
          >
            Vends tes articles
          </button>
        </Link>

        <div className="header-menu" onClick={() => handleMenu()}>
          <FontAwesomeIcon
            icon="bars"
            color=" #2eb0ba"
            size="2x"
            onClick={() => handleMenu()}
          />
        </div>
        {menu ? <div className="cadreMenu">coucou</div> : ""}
      </div>
    </div>
  );
}

export default Header;
