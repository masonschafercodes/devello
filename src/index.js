import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./assets/main.css";
import App from "./App";

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/resetpassword" component={ResetPassword} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
