const router = require('express').Router();
const ClickSchema = require('../models/click.model');

router.route('/clicks').post((req, res) => {


    const newClicks = new ClickSchema({
        $inc:{
            editprofileclick: 1,
            createprofileclick: 1
        }         
    });

    newClicks.save()
    .then(() => res.json('Click added'))
    .catch(err => res.status(400).json('Error:' + err));
});



module.exports = router;