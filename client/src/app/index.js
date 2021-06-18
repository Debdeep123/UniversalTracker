import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login, List } from "../pages";
//import { LeaveTracker, ExpenseTracker } from '../components';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/list" exact component={List} />
      </Switch>
    </Router>
  );
}

export default App;
