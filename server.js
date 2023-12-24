const express = require('express');
const serveStatic = require('serve-static');
// var cors = require('cors');

const app = express();
const distPath = 'dist';

// app.use(cors());
// Serve static files from the 'dist' folder
app.use(serveStatic(distPath));

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000. http://localhost:3000/');
});