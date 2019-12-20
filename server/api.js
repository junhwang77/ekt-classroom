const api = module.exports = require('express').Router()
const teacher = require('./teacher')
const classes = require('./class');
const student = require('./student');
const enrollment = require('./enrollment');
// import products from './products';
api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/teacher', teacher)
  .use('/class', classes)
  .use('/student', student)
  .use('/enrollment', enrollment)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
