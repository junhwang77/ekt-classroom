'use strict';

const Teacher = require('./teacher')
const Class = require('./class');
const Student = require('./student');
const Enrollment = require('./enrollment');

Teacher.hasMany(Class);
Class.belongsTo(Teacher);
Student.hasMany(Class);
Enrollment.hasMany(Student);
Enrollment.hasMany(Class);

module.exports = {Teacher, Class, Student, Enrollment};
