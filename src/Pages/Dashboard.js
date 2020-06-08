import React from "react";

import {Switch,Route,useRouteMatch} from "react-router-dom";

//Home Component
import MainHome from "../Component/Home/Main";
//Home Component

export default function Dashboard(){

  let {path}=useRouteMatch();

  return (
    <>
      <Switch>
        <MainHome />
      </Switch>
    </>
  );
}
