const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route to handle GET requests to /api
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Route to handle POST requests to /api
app.post('/api', (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
