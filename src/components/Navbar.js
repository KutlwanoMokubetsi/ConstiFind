// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Search, BookOpen, Upload } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  // Returns 'contained' for active link, otherwise 'text'
  const getVariant = (path) => (location.pathname === path ? 'contained' : 'text');

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ color: '#000' }}>
          ConstiFind
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            variant={getVariant('/')}
            startIcon={<BookOpen size={18} />}
            sx={{
              color: location.pathname === '/' ? 'white' : 'black',
              backgroundColor: location.pathname === '/' ? 'primary.main' : 'transparent',
              '&:hover': {
                backgroundColor: location.pathname === '/' ? 'primary.dark' : 'grey.100',
              },
            }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/search"
            variant={getVariant('/search')}
            startIcon={<Search size={18} />}
            sx={{
              color: location.pathname === '/search' ? 'white' : 'black',
              backgroundColor: location.pathname === '/search' ? 'primary.main' : 'transparent',
              '&:hover': {
                backgroundColor: location.pathname === '/search' ? 'primary.dark' : 'grey.100',
              },
            }}
          >
            Search
          </Button>

          <Button
            component={Link}
            to="/admin"
            variant={getVariant('/admin')}
            startIcon={<Upload size={18} />}
            sx={{
              color: location.pathname === '/admin' ? 'white' : 'black',
              backgroundColor: location.pathname === '/admin' ? 'primary.main' : 'transparent',
              '&:hover': {
                backgroundColor: location.pathname === '/admin' ? 'primary.dark' : 'grey.100',
              },
            }}
          >
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
