import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Header from "./components/Header";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Publish from "./containers/Publish";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);
function App() {
  const [recherche, setrecherche] = useState("");
  const [token, settoken] = useState(Cookie.get("token") || null);

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
      <Header
        className="sticky"
        userToken={userToken}
        token={token}
        recherche={recherche}
        setrecherche={setrecherche}
      />
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
        <Route path="/publish">
          <Publish userToken={userToken} />
        </Route>
        <Route path="/">
          <Home recherche={recherche} setrecherche={setrecherche} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
