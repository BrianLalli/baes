import React from 'react';
// import Login from "../Login/Login";
import { Link } from "react-router-dom";
import './GetStarted.css'

export default function GetStarted(){

    return (
        <div className="app flex-row align-items-center container mt-3">
            <div className="row justify-content-space-around align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className='title'>Bae/s</h1>
                    <h2 className='subtitle'>Your personal relationship assistant</h2>
                    <button type="button" className="btn btn-info">
                        <Link className="btn-link" to='/login'>Get Started</Link>
                    </button>
                </div>
                <div className="col-12 col-md-6">
                    <img src="BAEs4.png" alt='BAEs logo' width="700" height="550"></img>
                </div>
            </div>
        </div>
    );
    }


