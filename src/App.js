import React from 'react';

import {Switch,Route,useHistory,useRouteMatch,withRouter} from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

import LeftSideBar from "./Component/LeftSideBar";
import Dashboard from "./Pages/Dashboard";


import Auth from "./Auth";
import {ProteksiRoute} from "./ProteksiRoute";

function App() {

  let history=useHistory();

  React.useEffect(()=>{
    if(localStorage.getItem("kursus")){
      Auth.onLogin(()=>{
        if(window.location.pathname==="/"){
          history.push("/dashboard");
        }else{
          history.push(window.location.pathname);
        }
      });
    }else{
      Auth.onLogout(()=>{
        history.push("/login");
      });
    }
  },[]);

  return (
    <Switch>

      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>

        <ProteksiRoute path="/Dashboard">
          <LeftSideBar />
          <Dashboard />
        </ProteksiRoute>

    </Switch>
  );
}

export default withRouter(App);
