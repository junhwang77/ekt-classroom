'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const classes = db.define('classes', {
  subject: {
  	type: Sequelize.STRING,
  	allowNull: false
  }

});

module.exports = Product;
