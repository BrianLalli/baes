import React, { useState, useEffect } from "react";
import { Navigate, Link } from 'react-router-dom';

import "./connections.css"
import Auth from '../../utils/auth'


export default function Home({userState}) {
  
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(userState)
  }, [userState])


  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />
  }



return (
  <>
  <div className="container card">
      <div className="row justify-content-center text-center">
        <h3 className="col-12 col-lg-9 card-title cs-card-title text-center text-nowrap"> Connections </h3>
        <h4 className="col-12 col-lg-9 text-center"> Select a connection to view their profile</h4>
        <ul className="col-12 col-lg-9 list-group align-items-center cs-hover">
          {
              userData.connections ? userData.connections.map(connection => {
                  return (
                      <button className="col-12 col-lg-9 cs-button">
                        <Link className="cs-link col-12 col-lg-9" to={`/profile/${connection._id}`}>
                          {connection.username}
                        </Link>
                      </button>
                  )
              }) : ""
          }
        </ul>
      </div>
    </div>
  </>
);
}