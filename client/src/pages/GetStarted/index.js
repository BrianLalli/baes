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
                    <img class=" logo" src="LogoElephant.png" alt='BAEs logo' width="600" height="550"></img>
                </div>
            </div>

            <div className= 'container mt-5'>
                <div className = 'row'>
                    <h3 className='section-title col-12 text-center' align-text-center mt-2>How does it work?
                    </h3>
                </div>

                <div className='row'>
                    <div class="card col-12 col-md-4">
                        <img src="BAEs1.svg" class="card-img-top" alt="BAEs couple" height='350px'></img>
                        <div class="card-body">
                            <h5 class="card-title text-center">Relationships can be Tough</h5>
                            <p class="card-text text-center">It can be difficult to remember everything about your partner, which can cause some tension in the relationship. BAE/s can help you improve your relationship and connect with your partner.</p>
                        </div>
                    </div>
                    <div class="card col-12 col-md-4 d-flex align-items-center">
                        <img src="BAEs2.svg" class="card-img-top" alt="BAEs couple" height='350px'></img>
                        <div class="card-body">
                            <h5 class="card-title text-center" >Store Information about Your Partner with BAE/s</h5>
                            <p class="card-text text-center">Need help remembering those important facts? BAE/s will store information about your personal connections for you to access whenever you need. Now you'll never forget a birthday or anniversary again!</p>
                        </div>
                    </div>
                    <div class="card col-12 col-md-4">
                        <img src="BAEs3.svg" class="card-img-top" alt="BAEs couple" height='350px'></img>
                        <div class="card-body">
                            <h5 class="card-title text-center">Improve your Relationship</h5>
                            <p class="card-text text-center">With this application, you will feel more connected to your partner. Learn something new about each other, plan events based on each other's likes, or store important information.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }


