import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Style from './MainLayout.module.scss'
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Profile from './pages/Profile';
import Navbar from "./components/Navbar";
import Admin from './pages/Admin';
// import { useMutation } from '@apollo/client';
// import Toggler from "./components/Toggler/Toggler";
import Style from "./App.module.scss";
import { Box as Box, Grid } from "@mui/material";
// import Footer from './components/Footer';
// import {Box, Grid} from "@mui/material";
import { QUERY_ME } from './utils/queries';

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

  //query me data is currentstate with useEffect
  // const { loading, data } = useQuery(QUERY_ME);
  // setUserState({data});

  // const { loading, data } = useQuery(QUERY_ME);

  // useEffect(() => {
  //   if (data) {
  //     setUserState(data);
  //   }
  // })

  return (
    <ApolloProvider client={client}>
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
            <Route path="/profile" element={<Profile 
            userState={userState}
            setUserState={setUserState}/>}
            />
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
              <a href={"https://github.com/BrianLalli/baes"} className="github-link">
                <p>
                  Lovers Not Fighters &copy; 2022
                </p>
              </a>
            </Box>
          </Grid>
          {/* </div> */}
        </Router>
        </Box>
      </ApolloProvider>

  );
}

export default App;
