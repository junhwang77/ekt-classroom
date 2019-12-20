const db = require('../db') //this is required
const Teacher = require('../db/models/teacher');
const Class = require('../db/models/class');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Teacher.findAll({
            include: [Class]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Teacher.findAll({
            where:{id:req.params.id},
            include: [Class]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
