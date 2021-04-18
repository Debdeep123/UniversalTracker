import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login } from "../pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
