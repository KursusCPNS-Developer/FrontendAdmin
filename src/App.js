import React from 'react';

import {Switch,Route,withRouter} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
}

export default withRouter(App);
