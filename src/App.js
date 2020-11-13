import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookie from "js-cookie";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Header from "./components/Header";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
function App() {
  const [token, settoken] = useState(Cookie.get("token") || null);

  // Cookie.set("token", "hdhdhj");
  const userToken = (token) => {
    if (token) {
      Cookie.set("token", token, { expires: 1000 });
      settoken(token);
    } else {
      Cookie.remove("token");
      settoken(null);
    }
  };

  return (
    <Router>
      <Header className="sticky" userToken={userToken} token={token} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signin">
          <Signin userToken={userToken} />
        </Route>
        <Route path="/signup">
          <Signup userToken={userToken} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
