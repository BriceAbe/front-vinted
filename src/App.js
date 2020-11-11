import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
