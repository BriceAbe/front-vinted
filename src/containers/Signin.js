import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";

const Signin = ({ userToken, isPageHome, setisPageHome }) => {
  setisPageHome(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  const fetchAxios = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      Cookie.set("id", response.data._id);

      userToken(response.data.token);
    } catch (error) {
      console.log(error.messge);
    }
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
      <span className="signup-inscris-toi">
        Pas encore de compte ? Inscris-toi !
      </span>
    </div>
  );
};

export default Signin;
