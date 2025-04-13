import React from 'react';
import { LogOut } from 'lucide-react';
import { Box, Typography, Button } from '@mui/material';

const AdminHeader = ({ onSignOut }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
      <Typography variant="h5" fontWeight="bold" color="text.primary">
        Admin Portal
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={onSignOut}
        startIcon={<LogOut size={18} />}
        sx={{
          textTransform: 'none',
          fontWeight: 500,
        }}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default AdminHeader;
