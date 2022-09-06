import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Profile from './pages/Profile';
import Navbar from "./components/Navbar/index";
import Style from "./App.module.scss";
import { Box, Grid } from "@mui/material";
// import Footer from './components/Footer';
// import {Box, Grid} from "@mui/material";
import Admin from './pages/Admin';
import UserProfile from "./components/UserProfile";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  // const [darkMode, setDarkMode] = useState(true);
  // const handleClick = () => setDarkMode(!darkMode);
  return (
    // <Box className={darkMode ? Style.dark : Style.light}>
      <ApolloProvider client={client}>
        {/* Wrap page elements in Router component to keep track of location state */}
        <Router>
            <Navbar  />
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/" element={<GetStarted />} />
            {/* Define a route that will take in variable data */}
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            
          </Routes>

          <Grid item >
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
