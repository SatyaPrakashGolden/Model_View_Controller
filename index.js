// app.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./db/dbConnection.js');
const router = require('./routes/router.js'); // Import the router

connectDB(); // Connect to the database
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the router for your routes
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
