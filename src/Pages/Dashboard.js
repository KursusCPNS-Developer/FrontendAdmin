import React from "react";

import LeftSideBar from "../Component/Dashboard/LeftSideBar";
import RightSideBar from "../Component/Dashboard/RightSideBar";


export default function Dashboard(){

  return (
    <React.Fragment>
      <LeftSideBar />
      <RightSideBar />
    </React.Fragment>
  )
}
