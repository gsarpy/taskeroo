'use strict'

import express from ('express');
import mongoose from ('mongoose');
import bodyParser from ('body-parser');

const app = express();
const router = express.Router();

const port = process.env.API_PORT || 3001;

// Use bodyParser for API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Prevent cross origin errors by allowing CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );

  // Remove Caching to show most recent comment
  res.setHeader('Cache-Control', 'no-cache');
});


// Set route path and initialize API
router.get('/', function(req, res) {
  res.json({ message: 'API Activated!' });
});

// Use router confi for /api
app.use('/api', router);

// Start the server and listen
app.listen(port, function() {
  console.log(`API Running on Port: ${port}`);
});
