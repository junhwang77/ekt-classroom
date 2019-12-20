'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Students = db.define('students', {
  full_name: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
});

module.exports = Students;
