import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

let colors = ["rgb(0, 128, 128)", "rgb(224, 81, 171)"];

export default function Home({userState}) {


useEffect(() => {
  setUserData(userState)
}, [userState])

return (
<> 
<div className="container">
  <div className="row">
<h3 className="col-12"> Connections </h3>
<ul>
  {
      userData.connections ? userData.connections.map(connection => {
          return (
            <a href={`/profiles/${connection._id}`}>
              <li>{connection.username}</li>
            </a>
          )
      }) : ""
  }
</ul>
</div>
</div>
</>
);
}