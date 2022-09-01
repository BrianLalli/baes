// import React from 'react';

// export default function getStarted () {

//     function getStarted() {
//         function getStarted(e) {
//           e.preventDefault();
//           console.log('Good start!');
//         }
      
//         return (
//         <button onClick={getStarted}>
//             Get Started!
//           </button>
//         );
//       }
//     };

import React, { useState } from 'react';
import { Login } from "react-router-dom";
import {Home} from "react-router-dom";

export default function getStarted(){
    // let Home = getStarted(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      Login(path);
    }
  
  return (
     <div className="app flex-row align-items-center">
      <Container>
      ...     
      <Link to = "/login">
      <Button color="primary" className="px-4"
            // onClick={routeChange}
              >
              Get Started!
            </Button>
      </Link>     
      ...
       </Container>
    </div>
  );
};