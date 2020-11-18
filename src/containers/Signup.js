import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
const Signup = ({ userToken, isPageHome, setisPageHome }) => {
  const [check, setcheck] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  setisPageHome(false);
  const history = useHistory();

  const fetchAxios = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          phone: "0607080910",
          password: password,
        }
      );
      Cookie.set("id", response.data._id);
      userToken(response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  const handleSubmit = (e) => {
    fetchAxios();
    e.preventDefault();
    history.push("/");
  };

  //
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setusername(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setemail(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setpassword(value);
  };

  return (
    <div className="App">
      <h2 className="signup-h2">S'inscrire</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          className="signup-input"
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUsernameChange}
          required
          name="username"
          value={username}
        />
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          required
          name="email"
          value={email}
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Mot de passe"
          onChange={handlePasswordChange}
          required
          name="password"
          value={password}
        />

        <div className="signup-newletter-container">
          <div className="signup-checkbox-container">
            <input
              className="signup-checkbox"
              name="isGoing"
              type="checkbox"
              checked={check}
              onChange={(e) => setcheck(e.target.check)}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <input
          className="signup-input-submit"
          type="submit"
          value="S'inscrire"
        />
      </form>
      <span className="signup-deja-connecte">
        Tu as déjà un compte ? Connecte-toi !
      </span>
    </div>
  );
};

export default Signup;
