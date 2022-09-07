import React, { useState, useEffect } from "react";



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