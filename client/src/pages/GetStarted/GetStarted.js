import React from 'react';
// import Login from "../Login/Login";
import { Link } from "react-router-dom";

export default function GetStarted(){

    return (
        <div className="app flex-row align-items-center">
            <h1>BAE/s</h1>
            <Link to='/login'>Get Started!</Link>
        </div>
    );
    }


