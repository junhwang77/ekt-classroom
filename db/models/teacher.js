'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Teachers = db.define('teachers', {
  full_name: {
  	type: Sequelize.STRING,
  	allowNull: false
  }

});

module.exports = Teachers;
