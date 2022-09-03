import React from 'react';
import Login from '../../components/Login';
import Signup from '../../components/Signup';
import './Login.css';

// import Auth from '../utils/auth';
// import { GoogleLogin } from 'react-google-login'????????;

export default function LoginSignup () {

  return (
    <div className="login-signup-container">
      <Login/>
      <Signup/>
    </div>
  )
};