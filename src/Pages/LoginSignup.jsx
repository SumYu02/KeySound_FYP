import React from "react";
import './CSS/LoginSignUp.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your User Name"/>
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button>Login</button>
        <p className="loginsignup-login">New user?<span> Sign Up Here</span></p>
       <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing, I agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
