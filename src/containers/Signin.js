import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import "./signin.css";

const Signin = ({ userToken }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  const fetchAxios = async () => {
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/login",
      {
        email: email,
        password: password,
      }
    );
    console.log(response.data);
    userToken(response.data.token);
  };

  const handleConnexion = (e) => {
    fetchAxios();
    e.preventDefault();
    if (Cookie.get("versVente")) {
      Cookie.remove("versVente");
      history.push("/publish");
    } else {
      history.push("/");
    }
  };
  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setemail(value);
  };
  const handleChangePassword = (e) => {
    const value = e.target.value;
    setpassword(value);
  };

  return (
    <div className="App">
      <h2 className="signin-h2">Se connecter</h2>

      <form className="signin-form" onSubmit={handleConnexion}>
        <input
          className="signin-input"
          type="email"
          required
          name="email"
          placeholder="Adresse email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          className="signin-input"
          type="password"
          required
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handleChangePassword}
        />
        <input
          className="signin-input-submit"
          type="submit"
          value="Se connecter"
        />
      </form>
    </div>
  );
};

export default Signin;
