//Require express and profile.model.js
const router = require('express').Router();
const Profile = require('../models/profile.model');

//Get profile from the database 
router.route('/').get((req, res) => {
    Profile.find()
        .then(profiles => res.json(profiles))
        .catch(err => res.status(400).json('Error: ' + err));
});
//Add New profiles to the database
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const city = req.body.city;
    const hobbies = req.body.hobbies;
    

    const newProfile = new Profile({
        name,
        age,
        city,
        hobbies,
    });

    newProfile.save()
    .then(() => res.json('New Profile Added'))
    .catch(err => res.status(400).json('Error:' + err));
});
//Find profile by ID 
router.route('/:id').get((req, res) => {
    Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));
});
//Delete profile by ID 
router.route('/:id').delete((req, res) => {
    Profile.findByIdAndDelete(req.params.id)
    .then(() => res.json('profile deleted'))
    .catch(err => res.status(400).json('Error: ' + err ));
});
//Update profile by id
router.route('/update/:id').post((req, res) => {
    Profile.findById(req.params.id)
    .then(profile => {
        profile.name = req.body.name;
        profile.age = Number(req.body.age);
        profile.city = req.body.city;
        profile.hobbies = req.body.hobbies;

        profile.save()
        .then(() => res.json('Profile Updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;