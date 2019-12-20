'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Enrollments = db.define('enrollments', {
  date_enrolled: {
  	type: Sequelize.INTEGER,
  	allowNull: false,
  	defaultValue: 5,
  },
})

module.exports = Review;
