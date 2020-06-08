import React from "react";

export default function Login(){
  return (
            <div class="container" style={{"width":"100vw","height":"100vh"}}>
                <div class="signup-content" style={{"width":"100vw","height":"100vh"}}>
                    <div class="signup-img">
                        <img src="./assets/images/signup-img.jpg" alt="" />
                    </div>
                    <div class="signup-form" style={{"width":"100vw","height":"100vh"}}>
                        <form method="POST" class="register-form" id="register-form">
                            <h2>student Login form</h2>
                            <div class="form-group">
                                <label for="email">Email :</label>
                                <input type="email" name="email" id="email" style={{"width":"50%","height":"100%"}} required />
                            </div>
                            <div class="form-group">
                                <label for="password">password :</label>
                                <input type="password" name="password" id="password" style={{"width":"50%","height":"100%"}} required />
                            </div>
                            <div class="form-submit">
                                <input type="submit" value="Reset" class="submit" name="reset" id="reset" />
                                <input type="submit" value="Login" class="submit" name="login" id="login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  );
};
