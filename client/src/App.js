import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import Home from './pages/Home/Home';
// import Profile from './pages/Profile';
// import Header from './components/Header';
// import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        {/* <div className="flex-column justify-flex-start min-100-vh"> */}
          {/* <Header />
          <div className="container"> */}
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route 
                path="/" 
                element={<GetStarted />} 
              />
              {/* Define a route that will take in variable data */}
              <Route 
                path="/login" 
                element={<Login />} 
              />
              {/* Define a route that will take in variable data */}
              <Route 
                path="/home" 
                element={<Home />} 
              />
            </Routes>
          {/* </div>
          {/* <Footer /> */}
        {/* </div> */} 
      </Router>
    </ApolloProvider>
  );
}

export default App;
