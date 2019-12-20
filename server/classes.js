const db = require('../db') //this is required
const Class = require('../db/models/class');
const teacher = require('../db/models/teacher');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Class.findAll({
            include: [Teacher]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Class.findOne({
            where:{id:req.params.id},
            include: [Teacher]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router;
