import React from "react";

import axios from "axios";
import {urlContext} from "../context";

import {Link,useHistory} from "react-router-dom";
import Swal from "sweetalert2";

export default function Login(){
  let baseUrl=React.useContext(urlContext);
  let history=useHistory();
  let [LoginState,setLogin]=React.useState({
    email:"",
    password:""
  });

  let handleChange=(e)=>{
    setLogin({...LoginState,[e.target.name]:e.target.value});
  };

  let SubmitRequest=React.useCallback((e)=>{
    e.preventDefault();
    axios({
      url:`${baseUrl}/login`,
      method:'POST',
      data:{
        email:LoginState.email,
        password:LoginState.password
      }
    }).then(({data})=>{
      localStorage.setItem("kursus",data.token);
      history.push("/dashboard");
    }).catch(err=>{
      let msg="";
      if(err.response===undefined){
        msg=err.message;
      }else{
        msg=err.response.data.message;
      }
      Swal.fire({
        icon:"error",
        title:"Login Error",
        text:msg,
        timer:0,
      });
    });
  },[baseUrl,history,LoginState]);

  return (
            <div class="container-fluid" style={{padding:"0"}}>
              <div class="row">

                <div class="col-sm-6 col-md-6">
                  <img src="./assets/images/signup-img.jpg" style={{"width":"95vw","height":"95vh"}} alt="foto" />
                </div>

                <div class="col-sm-6 col-md-6">
                        <form style={{"color":"white","margin-top":"20%"}} onSubmit={SubmitRequest}>

                            <h2 style={{"color":"white"}} align="center">
                              <Link className="btn" style={{"color":"white","font-weight":"bold"}} to="/">Student Login form</Link>
                            </h2>
                            <div class="form-group row" style={{"color":"white","margin-top":"10%"}}>
                              <div class="col-sm-6 col-md-2">
                                <label for="email" style={{"color":"white"}}><h5>Email</h5></label>
                              </div>

                              <div class="col-sm-6 col-md-10">
                                <input class="border-primary form-control" name="email" type="email" placeholder=".. ." onChange={handleChange} required />
                              </div>

                            </div>
                            <div class="form-group row">
                              <div class="col-sm-6 col-md-2">
                                <label for="password" style={{"color":"white"}}><h5>Password</h5></label>
                              </div>
                              <div class="col-sm-6 col-md-10">
                                <input class="border-primary form-control" name="password" type="password" placeholder=".. ." onChange={handleChange} required />
                              </div>
                            </div>

                            <div class="form-submit row">
                              <div class="col-sm-6 col-md-6" align="center">
                                <input type="submit" value="Login" style={{"width":"100%"}} class="btn btn-success" name="login" id="login" />
                              </div>
                              <div class="col-sm-6 col-md-6" align="center">
                                <input type="submit" value="Reset" style={{"width":"100%"}} class="btn btn-danger" name="reset" id="reset" />
                              </div>
                            </div>
                        </form>
                        <div style={{"margin-top":"25px"}} align="center">
                          <Link className="btn" style={{"color":"white","font-weight":"bold"}} to="/register">Don't have an account ? Register here</Link>
                        </div>
                    </div>
                </div>

            </div>
  );
};
