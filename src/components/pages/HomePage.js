import React from 'react';
import { Search, Upload, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button
} from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box textAlign="center">
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          Constitutional Archive
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
          Access, search, and explore historical constitutional documents with ease.
        </Typography>

        <Box mt={5}>
          <Button
            component={Link}
            to="/search"
            variant="contained"
            size="large"
            startIcon={<Search />}
            sx={{ px: 4 }}
          >
            Start Searching
          </Button>
        </Box>
      </Box>

      <Box mt={12}>
        <Grid container spacing={4} sx={{ textAlign: 'center', justifyContent: 'center' }}>
          {/* Powerful Search Card */}
          <Grid item xs={12} sm={6} lg={4}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Box display="flex" justifyContent="center" mb={2}>
                <Box
                  display="inline-flex"
                  p={1.5}
                  bgcolor="primary.main"
                  borderRadius="50%"
                  boxShadow={3}
                >
                  <Search color="white" />
                </Box>
              </Box>
              <Typography variant="h6" gutterBottom>
                Powerful Search
              </Typography>
              <Typography color="text.secondary">
                Natural language search capabilities to find relevant constitutional documents quickly.
              </Typography>
            </Paper>
          </Grid>

          {/* Easy Upload Card */}
          <Grid item xs={12} sm={6} lg={4}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Box display="flex" justifyContent="center" mb={2}>
                <Box
                  display="inline-flex"
                  p={1.5}
                  bgcolor="primary.main"
                  borderRadius="50%"
                  boxShadow={3}
                >
                  <Upload color="white" />
                </Box>
              </Box>
              <Typography variant="h6" gutterBottom>
                Easy Upload
              </Typography>
              <Typography color="text.secondary" mb={2}>
                Administrators can easily upload and organize constitutional documents.
              </Typography>
              <Button
                component={Link}
                to="/admin"
                variant="contained"
                size="small"
              >
                Go to Admin Panel
              </Button>
            </Paper>
          </Grid>

          {/* API Access Card */}
          <Grid item xs={12} sm={6} lg={4}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Box display="flex" justifyContent="center" mb={2}>
                <Box
                  display="inline-flex"
                  p={1.5}
                  bgcolor="primary.main"
                  borderRadius="50%"
                  boxShadow={3}
                >
                  <Code color="white" />
                </Box>
              </Box>
              <Typography variant="h6" gutterBottom>
                API Access
              </Typography>
              <Typography color="text.secondary">
                RESTful API integration for developers to build upon our platform.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
