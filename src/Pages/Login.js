import React from "react";

import {Link} from "react-router-dom";

export default function Login(){
  return (
            <div class="container-fluid" style={{padding:"0"}}>
              <div class="row">

                <div class="col-sm-6 col-md-6">
                    <img src="./assets/images/signup-img.jpg" style={{"width":"95vw","height":"95vh"}} alt="foto" />
                </div>

                <div class="col-sm-6 col-md-6">
                        <form method="POST" style={{"color":"white","margin-top":"20%"}}>

                            <h2 style={{"color":"white"}} align="center">Student Login form</h2>
                            <div class="form-group row" style={{"color":"white","margin-top":"10%"}}>
                              <div class="col-sm-6 col-md-2">
                                <label for="email" style={{"color":"white"}}><h5>Email</h5></label>
                              </div>

                              <div class="col-sm-6 col-md-10">
                                <input class="border-primary form-control" type="email" placeholder=".. ." required />
                              </div>

                            </div>
                            <div class="form-group row">
                              <div class="col-sm-6 col-md-2">
                                <label for="password" style={{"color":"white"}}><h5>Password</h5></label>
                              </div>
                              <div class="col-sm-6 col-md-10">
                                <input class="border-primary form-control" type="password" placeholder=".. ." required />
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
