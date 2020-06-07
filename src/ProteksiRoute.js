import React from "react";

import Auth from "./Auth";
import {Route,Redirect} from "react-router-dom";

export function ProteksiRoute({component:Component,...rest}){

  return (
    <Route {...rest} render={(props)=>{
          if(Auth.userLogin){
            return <Component {...rest} />
          }else{
            return (<Redirect to={{
              pathname:'/',
              state:{from:props.location}
            }} />
          );
          }
    }}
    />
  );
}
