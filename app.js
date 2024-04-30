// app.js

const express = require('express');
const app = express();
const galaxiesRoutes = require('./Routes/galaxiesRoutes.js');
const starsRoutes = require('./Routes/starsRoutes.js');
const planetsRoutes = require('./Routes/planetsRoutes.js')

// Link routes to the app
app.use('/galaxies', galaxiesRoutes);
app.use('/stars', starsRoutes);
app.use('/planets', planetsRoutes);

// Other app configurations and middleware

module.exports = app;
