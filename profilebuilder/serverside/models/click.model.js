const mongoose = require("mongoose");


const ClickSchema = new mongoose.Schema({
    editprofileclick: {type: Number},
    createprofileclick: {type: Number},
});

module.exports = mongoose.model('Login', ClickSchema);