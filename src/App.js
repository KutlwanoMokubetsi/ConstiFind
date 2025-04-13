import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Homepage from './components/pages/HomePage';
import Admin from './components/pages/AdminPage';
import Search from './components/pages/SearchPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      <Router basename='/'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;