import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from './images/archive-icon.jpg';


const Login = () => {
  return (
    <>
        {/* Navbar */}
        <Box sx={{backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center'}}>
            <Box>
                <Button>Login as Admin to upload</Button>
            </Box>
        </Box>

        {/* Main */}
        <Box sx ={{ minHeight: "90vh", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            {/* Logo */}
            <Box component={'img'} src = {logo} alt='logo' sx={{ width: '100px', height: '100px', mb: 2}}/>
            {/* Title */}
            <Box>
                <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>Welcome to ConstiFind</Typography>

            </Box>
        

            {/* Input wrapper */}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '40%', px: 2, py: 2, borderRadius: '10px', border: '1px solid gray', backgroundColor: '#fff'}}>
                <SearchIcon sx={{ color: '#000', fontSize: '2rem', mr: 1}}/>
                <Box component={'input'} sx={{border: 'none', "&:focus": { outline: 'none'}, flex: 1, fontSize: '18px' }}>

                </Box>
            </Box>
            {/* Search button */}
            <Box>
                <Button variant='contained' sx={{ backgroundColor: '#000', color: '#fff', fontSize: '18px', px: 4, py: 1, mt: 2}}>Search</Button>
            </Box>
        
        </Box>
    </>
  )
}

export default Login