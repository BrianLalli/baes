import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Profile from './pages/Profile';
import Navbar from "./components/Navbar/index";
import Style from "./App.module.scss";
import { Box as Box, Grid } from "@mui/material";
// import Footer from './components/Footer';
// import {Box, Grid} from "@mui/material";
import Admin from './pages/Admin';
import UserProfile from "./components/UserProfile";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
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


  // const [darkMode, setDarkMode] = useState(true);
  // const handleClick = () => setDarkMode(!darkMode);

  return (
    <Box >
      <ApolloProvider client={client}>
        {/* Wrap page elements in Router component to keep track of location state */}
        <Router>
            <Navbar
            />
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
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile 
            userState={userState}
            setUserState={setUserState}/>}
            />
            <Route path="/admin" element={<Admin             
            adminState={userState}
            setAdminState={setUserState}/>} 
            />
            <Route path="/profile/:userId" element={<Profile />} />
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
              <p>
                Lovers Not Fighters &copy; 2022
                <a href={"https://github.com/BrianLalli/baes"}></a>
              </p>
            </Box>
          </Grid>
        </Router>
      </ApolloProvider>
    // </Box>
  );
}

export default App;
