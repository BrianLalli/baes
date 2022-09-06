import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import AppContainer from './pages/AppContainer';

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


  
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
}

export default App;
