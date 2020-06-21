import React from "react";

import {Switch,Route,useRouteMatch} from "react-router-dom";

//Home Component
import MainAdmin from "../Component/Home/Main";
import AdminPage from "../Component/Home/Admin/AdminPage";
import GuruPage from "../Component/Home/Guru/GuruPage";
import MuridPage from "../Component/Home/Murid/MuridPage";

//Home Component

export default function Dashboard(){

  let {path}=useRouteMatch();

  React.useEffect(()=>{

  },[]);

  return (
    <>
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
    </>
  );
}
