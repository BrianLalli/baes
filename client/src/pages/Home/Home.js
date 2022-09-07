import React, { useState, useEffect } from "react";
import Style from "./home.module.scss";
// import me from "../../img/self.png";
// import partner1 from "../../img/Partner1.png"
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

let colors = ["rgb(0, 128, 128)", "rgb(224, 81, 171)"];

export default function Home({userState}) {

    const [userData, setUserData] = useState({});


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
