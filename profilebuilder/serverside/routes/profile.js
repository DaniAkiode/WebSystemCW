const router = require('express').Router();
let Profile = require('../models/profile.model');

router.route('/').get((req, res) => {
    Profile.find()
        .then(profiles => res.json(profiles))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route("/add").post((req, res) =>{
    const firstname = req.body.username;
    const surname = req.body.surname;
    const age = Number(req.body.surname);
    const city = req.body.city;
    const hobbies = req.body.hobbies;

    const newProfile = new Profile({
        firstname,
        surname,
        age,
        city,
        hobbies,
    });

    newProfile.save()
    .then(() => res.json('New Profile Added'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req, res) => {
    Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Profile.findByIdAndDelete(req.params.id)
    .then(() => res.json('profile deleted'))
    .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/update/:id').post((req, res) => {
    Profile.findById(req.params.id)
    .then(profile => {
        profile.firstname = req.body.firstname;
        profile.surname = req.body.description;
        profile.age = Number(req.body.date);
        profile.city = req.body.city;
        profile.hobbies = req.body.city;

        profile.save()
        .then(() => res.json('Profile Updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;