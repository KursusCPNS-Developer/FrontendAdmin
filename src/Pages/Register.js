import React from "react";

import axios from "axios";
import "../Component/registerpub/css/styles.css";

import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export default function Register(){

  const [register,setRegister]=React.useState({
    fullname:undefined,
    email:undefined,
    address:undefined,
    no_hp:undefined,
    gender:undefined,
    course:undefined,
    password:undefined,
    verpassword:undefined
  });

  const handleChange=(e)=>{
    setRegister({...register,[e.target.name]:e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios({
      url:`http://localhost:3001/register`,
      method:'POST',
      data:{
        fullname:register.fullname,
        email:register.email,
        address:register.address,
        no_hp:register.no_hp,
        gender:register.gender,
        course:register.course,
        password:register.password,
        verpassword:register.verpassword
      }
    }).then(({data})=>{
      Swal.fire({
        icon:"success",
        title:"Register Success",
        text:`${data.message}`,
        timer:0
      });
    }).catch(err=>{
      let msg="";
      if(err.response===undefined){
        msg=err.message;
      }else{
        msg=err.response.data.message;
      }
      Swal.fire({
        icon:"error",
        title:"Register Error",
        text:`${msg}`,
        timer:0
      });
    });
  };

  return (
    <div class="main">
        <div class="container">
            <div class="signup-content">
                <div class="signup-img">
                    <img src="/assets/images/signup-img.jpg" alt="alt" />
                </div>
                <div class="signup-form">
                    <form class="register-form" id="register-form" onSubmit={handleSubmit}>
                        <h2>
                        <Link to="/" style={{"text-decoration":"none"}}>
                          Student registration form
                        </Link>
                        </h2>
                        <div class="form-group">
                            <label for="fullname">Full Name :</label>
                            <input type="text" name="fullname" id="fullname" onChange={handleChange} required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email :</label>
                            <input type="email" name="email" id="email" onChange={handleChange} required />
                        </div>
                        <div class="form-group">
                            <label for="address">Address :</label>
                            <input type="text" name="address" id="address" onChange={handleChange} required />
                        </div>
                        <div class="form-group">
                            <label for="nomorhp">Nomor Hp :</label>
                            <input type="tel" name="no_hp" id="no_hp" onChange={handleChange} required />
                        </div>
                        <div class="form-radio">
                            <label for="gender" class="radio-label" style={{"color":"black"}}>Gender :</label>
                            <select name="gender" id="course" onChange={handleChange}>
                                <option value="">Gender</option>
                                <option value="computer">Male</option>
                                <option value="desiger">Famale</option>
                            </select>
                        </div>
                        <div class="form-group" style={{"padding":"10px 0"}}>
                            <label for="course">Course :</label>
                            <div class="form-select">
                                <select name="course" id="course" onChange={handleChange}>
                                    <option value="">Pilih Paket</option>
                                    <option value="computer">Cpns Online</option>
                                    <option value="desiger">Cpns Online + Offline</option>
                                    <option value="marketing">Cpns Offline</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">password :</label>
                            <input type="password" name="password" id="password" onChange={handleChange} required />
                        </div>
                        <div class="form-group">
                            <label for="verpassword">Vertifikasi password :</label>
                            <input type="password" name="verpassword" id="verpassword" onChange={handleChange} required />
                        </div>
                        <div class="form-group" align="center">
                          <Link className="btn" style={{"color":"black","font-weight":"bold"}} to="/login">Already have an account? Login here</Link>
                        </div>
                        <div class="form-submit">
                            <input type="submit" value="Register" class="submit" name="register" id="suregisterbmit" />
                            <input type="reset" value="Reset All" class="submit" name="reset" id="reset" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
