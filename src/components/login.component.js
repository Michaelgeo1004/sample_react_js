import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import {SiGnuprivacyguard} from "react-icons/si";
import {IoMdLogIn} from "react-icons/io";
import {SiWikidata} from "react-icons/si"
export default class Login extends Component {
    constructor(props){
    super(props)
    this.state={
        email:"",
        password:"",
        errors:"",
    };
    this.handleSubmit= this.handleSubmit.bind(this);
}
handleSubmit(e) {
    e.preventDefault();
    const { email, password }=this.state;

     // Perform validation
     let errors = {};
     if (!email || email=="" || email==null) {
       alert('Email is required !')
       return;
     }
     if (!password || password =="" || password == null) {
       alert = ('Password is required !');
       errors.password = "Password is Required";
       return;
     }
 
     // If there are errors, update the state with the errors
     if (Object.keys(errors).length > 0) {
      //  this.setState({ errors });
       return;
     }
    console.log(email, password);

    fetch("http://localhost:5000/login-user",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({
                email,
                password,
            }),
        }).then((res)=>res.json())
        .then((data)=>{
          if(data.status =="ok" || data.status=="ok"){
            window.location="/home"
          }else{
              alert("Username and Password Not match !")
            }
        });
}
  render() {
    return (
      <div>
      <nav className="navbar ">
      <ul>
        <li className="nav-item">
          <Link className="nav-link" to={'/sign-in'}>
          <a>Login<IoMdLogIn size={20} color='red'/><br></br></a>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={'/sign-up'}>
        <a>Sign up<SiGnuprivacyguard size={20} color='red'/><br></br></a>
          </Link>
        </li>
        
      </ul>
</nav>
      <div className="auth-wrapper">
      <div className="auth-inner">

      
      <form className='loginForm' onSubmit={this.handleSubmit}>
      
      <div className='h3'>
        <h3>Sign In</h3>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e=>this.setState({email:e.target.value})}
          />
          {this.state.errors.length > 0 && <span>{this.state.errors}</span>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e=>this.setState({password:e.target.value})}
          />
          {this.state.errors.password && <span>{this.state.errors.password}</span>}
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-primary" >
        {/* <Link to={'/home'}>
        <a><SiWikidata size={20} color='red'/><br></br></a>
      </Link> */}
          Submit
          
        </button>
        
      </div>
        <p className="forgot-password text-right">
           <a href="#">Forgot Password</a>
        </p>
      </form>
      </div>
      </div>
      </div>

    )
  }
}