const router = require('express').Router();
const SignUpSchema = require('../models/signup.model')

router.route("/signup").post((req, res) => {
        const fullname = req.body.fullname;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const NewUser = new SignUpSchema({
           fullname,
           username,
           email,
           password 
        });

        NewUser.save()
        .then(() => res.json('New User Added In the Inner Circle'))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route("/login/:username/:password/").get((req, res) => {
    SignUpSchema.find(req.params.id)
    .then(SignUpSchema => {
        SignUpSchema.username = req.body.username;
        SignUpSchema.password = req.body.password;
    
    })
    .catch(err => res.status(400).json('Error:' + err));
});