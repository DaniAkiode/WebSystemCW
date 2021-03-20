const express = require('express')
const router = express.Router()
const SignUpSchema = require('../models/signup.model')
const bcrypt= require('bcrypt')

router.post('/signup', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const NewUser = new SignUpSchema({
        fullname:request.body.fullname,
        username:request.body.username,
        email:request.body.email,
        password:securePassword
    })

    NewUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router