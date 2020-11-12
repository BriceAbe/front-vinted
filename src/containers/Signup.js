import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [token, settoken] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //

  const handleSubmit = (e) => {
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
        settoken(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAxios();
    e.preventDefault();
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

  console.log(token);
  return (
    <div>
      {" "}
      je suis le signup -
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUsernameChange}
          required
          value={username}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          required
          value={email}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePasswordChange}
          required
          value={password}
        />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
