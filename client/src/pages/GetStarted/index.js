import React from 'react';
// import Login from "../Login/Login";
import { Link } from "react-router-dom";
import './GetStarted.css'

export default function GetStarted(){

    return (
        <div className="app flex-row align-items-center container mt-3">
            <div className="row justify-content-space-around align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className='title'>Baes</h1>
                    <h2 className='subtitle'>Remember the important information</h2>
                    <button type="button" className="btn btn-info other-custom-btn">
                        <Link className="btn-link" to='/login'>Get Started</Link>
                    </button>
                </div>
                <div className="col-12 col-md-6">
                    <img className=" logo" src="logoElephant3.png" alt='BAEs logo' width="600" height="550"></img>

                </div>
            </div>

            <div className= 'container mt-5'>
                <div className = 'row'>
                    <h3 className='section-title col-12 text-center m-2' >How does it work?
                    </h3>
                </div>

                <div className='row'>
                    <div className="card col-12 col-md-4">
                        <img src="BAEs01.svg" className="card-img-top" alt="BAEs couple" height='350px'></img>
                        <div className="card-body">
                            <h5 className="card-title text-center">Relationships can be Tough</h5>
                            <p className="card-text text-center">It can be difficult to remember everything about the important people in your life which can cause tension in relationships. Baes can help you improve your relationship and build better connections.</p>
                        </div>
                    </div>
                    <div className="card col-12 col-md-4 d-flex align-items-center">
                        <img src="BAEs02.svg" className="card-img-top" alt="BAEs couple" height='350px'></img>
                        <div className="card-body">
                            <h5 className="card-title text-center" >Store Information about Your Connections</h5>
                            <p className="card-text text-center">Need help remembering those important facts? Baes will store information about your personal connections for you to access whenever you need.</p>
                        </div>
                    </div>
                    <div className="card col-12 col-md-4">
                        <img src="BAEs03.svg" className="card-img-top" alt="BAEs couple" height='350px'></img>
                        <div className="card-body">
                            <h5 className="card-title text-center">Improve your Relationships</h5>
                            <p className="card-text text-center">With this application, you will feel more connected. Learn something new about each other, store new facts and never forget a birthday or important information again!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }


