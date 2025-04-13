import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import {
  Box,
  Container,
  InputBase,
  IconButton,
  Paper,
  Select,
  MenuItem,
  Typography,
  Stack,
  Button,
} from '@mui/material';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock search results for demonstration
  const mockResults = [
    {
      id: 1,
      title: 'Constitution of India - 1947',
      excerpt: 'The Constitution of India is the supreme law of India. The document lays down the framework that demarcates fundamental political code, structure, procedures, powers, and duties...',
      type: 'PDF',
      relevance: '98%',
    },
    {
      id: 2,
      title: 'Constitutional Amendments 2020',
      excerpt: 'Recent amendments to the constitution including changes to citizenship laws and administrative reforms...',
      type: 'Document',
      relevance: '95%',
    },
    {
      id: 3,
      title: 'Historical Constitutional Notes',
      excerpt: 'Comprehensive analysis of the constitutional development including historical context and implementation challenges...',
      type: 'PDF',
      relevance: '92%',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Search Bar */}
      <Box maxWidth="md" mx="auto" mb={4}>
        <Paper
          component="form"
          sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search constitutional documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: 1, color: 'white', bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}>
            <Search size={20} />
          </IconButton>
        </Paper>
      </Box>

      {/* Filters */}
      <Box maxWidth="md" mx="auto" mb={6}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
            <Filter size={16} />
            <Typography variant="body2">Filters:</Typography>
          </Stack>
          <Select size="small" defaultValue="All Types">
            <MenuItem value="All Types">All Types</MenuItem>
            <MenuItem value="PDF">PDF</MenuItem>
            <MenuItem value="Document">Document</MenuItem>
            <MenuItem value="Image">Image</MenuItem>
          </Select>
          <Select size="small" defaultValue="All Dates">
            <MenuItem value="All Dates">All Dates</MenuItem>
            <MenuItem value="Last Week">Last Week</MenuItem>
            <MenuItem value="Last Month">Last Month</MenuItem>
            <MenuItem value="Last Year">Last Year</MenuItem>
          </Select>
        </Stack>
      </Box>

      {/* Search Results */}
      <Box maxWidth="md" mx="auto">
        <Stack spacing={3}>
          {mockResults.map((result) => (
            <Paper key={result.id} elevation={2} sx={{ p: 3 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="h6">{result.title}</Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {result.excerpt}
                  </Typography>
                </Box>
                <Typography variant="body2" color="success.main" fontWeight={600}>
                  {result.relevance}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} mt={2}>
                <Typography variant="body2" color="text.secondary">{result.type}</Typography>
                <Button variant="text" size="small">View Document</Button>
                <Button variant="text" size="small">Download</Button>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default SearchPage;
