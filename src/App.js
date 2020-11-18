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
import PaymentRoute from "./containers/PaymentRoute";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
function App() {
  const [isPageHome, setisPageHome] = useState(false);
  const [rechercheTitre, setrechercheTitre] = useState("");
  const [prixMin, setprixMin] = useState("");
  const [prixMax, setprixMax] = useState("");
  const [tri, settri] = useState("");
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
        rechercheTitre={rechercheTitre}
        setrechercheTitre={setrechercheTitre}
        tri={tri}
        settri={settri}
        prixMin={prixMin}
        setprixMin={setprixMin}
        prixMax={prixMax}
        setprixMax={setprixMax}
        isPageHome={isPageHome}
        setisPageHome={setisPageHome}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer isPageHome={isPageHome} setisPageHome={setisPageHome} />
        </Route>
        <Route path="/signin">
          <Signin
            userToken={userToken}
            isPageHome={isPageHome}
            setisPageHome={setisPageHome}
          />
        </Route>
        <Route path="/signup">
          <Signup
            userToken={userToken}
            isPageHome={isPageHome}
            setisPageHome={setisPageHome}
          />
        </Route>
        <Route path="/publish">
          <Publish
            token={token}
            isPageHome={isPageHome}
            setisPageHome={setisPageHome}
          />
        </Route>
        <Route path="/payment">
          <PaymentRoute
            token={token}
            isPageHome={isPageHome}
            setisPageHome={setisPageHome}
          />
        </Route>
        <Route path="/">
          <Home
            rechercheTitre={rechercheTitre}
            setrechercheTitre={setrechercheTitre}
            tri={tri}
            settri={settri}
            prixMin={prixMin}
            setprixMin={setprixMin}
            prixMax={prixMax}
            setprixMax={setprixMax}
            isPageHome={isPageHome}
            setisPageHome={setisPageHome}
            token={token}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
