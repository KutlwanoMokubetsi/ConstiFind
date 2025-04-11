const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3001; // Backend on port 3001

app.use(cors()); // Allow frontend requests
app.use(express.json());

// Read data from data.json
const rawData = fs.readFileSync('data.json');
const documents = JSON.parse(rawData);

// API route to handle natural language-like queries
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';

  const results = documents.filter(doc =>
    doc.title.toLowerCase().includes(query) ||
    doc.summary.toLowerCase().includes(query) ||
    doc.country.toLowerCase().includes(query)
  );

  res.json({ results });
});

// Health check route
app.get('/', (req, res) => {
  res.send('ConstiFind API is up!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
