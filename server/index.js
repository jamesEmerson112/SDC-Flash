require('dotenv').config();

const V = require('./Utility/utility.js');

// Router
const router = require('./routes.js');
const db = require('./Database');

// ETL
// const ETL = require('./ETL');

// Middleware
const morgan = require('morgan');
const cors = require('cors');

// DECLARE EXPRESS
const express = require('express');
const app = express();
const path = require('path');

// logging and parsing
// app.use(morgan('dev'));
// app.use(cors());

// SETTING UP MIDDLE WARE
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

// DECLARING PORT
const PORT = process.env.PORT || 3000;

// LISTENING TO THE ASSIGNED PORT
app.listen(PORT);
console.log(`Listening at http://${process.env.LOCAHOST}:${PORT}`);

// TESTING
const randomNumber = Math.floor(Math.random() * 1000000);

app.get('/', (req, res) => {
  res.send('Hello! This server\'s random number is: ' + randomNumber + '\n');
});


// ============== ROUTES ===============
// app.use('https://localhost:3000/api/fec2/rfp', router);
app.use(router);


// ==============DATABASE================
// ETL();
