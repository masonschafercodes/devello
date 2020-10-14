import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./assets/main.css";
import App from "./App";

import Login from './pages/Login';
import SignUp from './pages/SignUp';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
