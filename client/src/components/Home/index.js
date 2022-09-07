import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

let colors = ["rgb(0, 128, 128)", "rgb(224, 81, 171)"];

export default function Home({userState}) {


useEffect(() => {
  setUserData(userState)
}, [userState])

return (
<>
<h3> Connections </h3>
<ul>
  {
      userData.connections ? userData.connections.map(connection => {
          return (
              <li>{connection.username}</li>
          )
      }) : ""
  }
</ul>
</>
);
}
