import React from "react";

import {Router,Switch,Route,withRouter,useRouteMatch} from "react-router-dom";

//Home Component
import AdminPage from "./Admin/AdminPage";
import GuruPage from "./Guru/GuruPage";
import MuridPage from "./Murid/MuridPage";
//Home Component

function Main(){

  let {path}=useRouteMatch();

  return (
      <Switch>
        <Route path={`${path}/`} exact>
          <AdminPage />
        </Route>
        <Route path={`${path}/Guru`}>
          <GuruPage />
        </Route>
        <Route path={`${path}/Murid`}>
          <MuridPage />
        </Route>
      </Switch>
  )
}

export default withRouter(Main);
