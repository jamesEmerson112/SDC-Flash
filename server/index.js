const V = require('./Utility/utility.js');
const database = require('./Database/db.js');

// Router
var router = require('./routes.js');

var db = require('./Database');

// Middleware
var morgan = require('morgan');
var cors = require('cors');

// logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../client/dist")));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);

// Set up our routes
// switching to localhost:3000 perhaps?
app.use('https://localhost:3000/api/fec2/rfp', router);


// ==============DATABASE================

