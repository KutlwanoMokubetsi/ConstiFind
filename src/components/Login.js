import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from './images/archive-icon.jpg';
import AdminHome from './AdminHome';

const Login = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // If authenticated, render AdminHome component
  if (isAuthenticated) {
    return <AdminHome />;
  }

  // Public page (non-authenticated)
  return (
    <>
      {/* Navbar */}
      <Box sx={{ backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button 
          variant="contained" 
          onClick={() => loginWithRedirect()}
          sx={{ backgroundColor: '#000', color: '#fff' }}
        >
          Login as Admin to upload
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ minHeight: "90vh", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box component={'img'} src={logo} alt='logo' sx={{ width: '100px', height: '100px', mb: 2 }} />
        <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>Welcome to ConstiFind</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '60%', px: 2, py: 2, borderRadius: '10px', border: '1px solid gray', backgroundColor: '#fff' }}>
          <SearchIcon sx={{ color: '#000', fontSize: '2rem', mr: 1 }} />
          <Box component={'input'} sx={{ border: 'none', "&:focus": { outline: 'none' }, flex: 1, fontSize: '18px' }} />
        </Box>
        <Button variant='contained' sx={{ backgroundColor: '#000', color: '#fff', fontSize: '18px', px: 4, py: 1, mt: 2 }}>Search</Button>
      </Box>
    </>
  );
};

export default Login;