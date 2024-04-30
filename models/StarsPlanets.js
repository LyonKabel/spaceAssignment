const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');
const Planet = require('./Planet');
const Star = require('./Star');

class StarsPlanets extends Model {}

StarsPlanets.init({
  // Additional fields if needed
}, {
    sequelize,
    modelName: 'StarsPlanets',
    timestamps: false // 
});

Planet.belongsToMany(Star, { through: StarsPlanets });
Star.belongsToMany(Planet, { through: StarsPlanets });

module.exports = StarsPlanets;
