const express = require('express')
const router = express.Router()
const SignUpSchema = require('../models/signup.model')
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const NewUser = new SignUpSchema({
        fullname:req.body.fullname,
        username:req.body.username,
        email:req.body.email,
        password:securePassword
    })

    NewUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})


/*router.route("/login/:username/:password/").get((req, res) => {
    SignUpSchema.find(req.params.id)
    .then(SignUpSchema => {
        SignUpSchema.username = req.body.username;
        SignUpSchema.password = req.body.password;
    
    })
    .catch(err => res.status(400).json('Error:' + err));
});*/

module.exports = router;