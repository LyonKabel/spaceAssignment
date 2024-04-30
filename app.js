// app.js

const express = require('express');
const app = express();
const galaxiesRoutes = require('./Routes/galaxiesRoutes.js');
const starsRoutes = require('./Routes/starRoutes.js');
const planetsRoutes = require('./Routes/planetsRoutes.js')

// Link routes to the app
app.use('/galaxies', galaxiesRoutes);
app.use('/stars', starsRoutes);
app.use('/planets', planetsRoutes);



module.exports = app;

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

