import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "../GetStarted";
import Login from "../Login";
import Home from "../Home/Home";
import Profile from '../Profile';
import Navbar from "../../components/Navbar/navbar";
import Admin from '../Admin';
import Logout from "../../components/Logout/index";
// import { useMutation } from '@apollo/client';
// import Toggler from "./components/Toggler/Toggler";
import { Box as Box, Grid } from "@mui/material";
// import Footer from './components/Footer';
// import {Box, Grid} from "@mui/material";
import { QUERY_ME } from '../../utils/queries';

export default function AppContainer() {
  
  const [userState, setUserState] = useState ({})

  //query me data is currentstate with useEffect
  // const { loading, data } = useQuery(QUERY_ME);
  // setUserState({data});

  const { loading, data } = useQuery(QUERY_ME);

  useEffect(() => {
    if (data) {
      setUserState(data.me);
    }
  })


  return (
    <Box>
    {/* Wrap page elements in Router component to keep track of location state */}
    <Router>
      {/* <Grid
        container

        display={'flex'}
        flexDirection={'column'}
        minHeight={'100vh'}
        justifyContent={'space-between'}
      ></Grid> */}
      {/* <Grid item> */}

        <Navbar/>
      {/* </Grid>{" "} */}
      {/* <div className="flex-column justify-flex-start min-100-vh"> */}
      {/* <Header />
      <div className="container"> */}
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login 
        signupState={userState} 
        loginState={userState}
        setSignupState={setUserState}
        setLoginState={setUserState}/>} 
        />
        <Route path="/connections" element={<Home userState={userState}/>} />
        <Route path="/profile" element={<Profile 
        userState={userState}
        setUserState={setUserState}/>}
        />
        <Route path="/admin" element={<Admin             
        adminState={userState}
        setAdminState={setUserState}/>} 
        />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/logout" element={<Logout 
        logoutState={userState}
        setLogoutState={setUserState}/>} 
        />
      </Routes>
      <Grid item>
        <Box
          component={"footer"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          py={"1.5rem"}
          sx={{ opacity: 0.7 }}
          width={"100%"}
        >
          <a href={"https://github.com/BrianLalli/baes"} className="github-link">
            <p>
              Lovers Not Fighters &copy; 2022
            </p>
          </a>
        </Box>
      </Grid>
    </Router>
    </Box>

  )
}