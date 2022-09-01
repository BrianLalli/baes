import React from 'react';
// import { GoogleLogin } from 'react-google-login'????????;

export default function Login () {


  return (
    <div>
      <form>
        <div className="login-input-container">
          <input name="username" className="login-username" placeholder="username"></input>
          <input name="password" className="login-password" placeholder="password"></input>
        </div>
        <div>
          <button className="submit-login">submit</button>
        </div>
      </form>
    </div>
  )
};