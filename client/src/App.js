import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Style from './MainLayout.module.scss'
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Profile from './pages/Profile';
import Navbar from "./components/Navbar/index";
import { useMutation } from '@apollo/client';
// import Toggler from "./components/Toggler/Toggler";
import Style from "./App.module.scss";
import { Box, Grid } from "@mui/material";
// import Footer from './components/Footer';
// import {Box, Grid} from "@mui/material";
import Admin from './pages/Admin';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});




function App() {


  const [userState, setUserState] = useState ({
    username: '',
    email: '',
    password: '',
    allergies: '',
    faveFoods: '',
    hateFoods: '',
    birthday: '',
    phobias: '',
    hobbies: '', 
    connections: [],
  })

  const [darkMode, setDarkMode] = useState(true);
  const handleClick = () => setDarkMode(!darkMode);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <ApolloProvider client={client}>
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

            <Navbar darkMode={darkMode} handleClick={handleClick} />
          {/* </Grid>{" "} */}
          {/* <div className="flex-column justify-flex-start min-100-vh"> */}
          {/* <Header />
          <div className="container"> */}
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/" element={<GetStarted />} />
            {/* Define a route that will take in variable data */}
            <Route path="/login" element={<Login 
            signupState={userState} 
            loginState={userState}
            setSignupState={setUserState}
            setLoginState={setUserState}/>} 
            />
            {/* Define a route that will take in variable data */}
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin             
            adminState={userState}
            setAdminState={setUserState}/>} 
            />
          </Routes>
          {/* </div>
          {/* <Footer /> */}
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
              <p>
                Lovers Not Fighters &copy; 2022
                <a href={"https://github.com/BrianLalli/baes"}></a>
              </p>
            </Box>
          </Grid>
          {/* </div> */}
        </Router>
      </ApolloProvider>
    </Box>
  );
}

export default App;
