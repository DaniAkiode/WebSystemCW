const router = require('express').Router();
let Person = require('../models/person.model')

router.route('/').get((req, res) => {
    Person.find()
        .then(person => res.json(person))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/send').post((req, res) => {
    const name = req.body.name;

    const newPerson = new Person({name});

    newPerson.save()
    .then(() => res.json('Person added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;