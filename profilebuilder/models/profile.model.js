//Require Mongoose
const mongoose = require("mongoose");

//Create new schema for Database
const profileSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true },
    city: {type: String, required: true},
    hobbies: {type: String, required: true},
    clicks: Number
},{
    timestamps: true,//for A/B Testing
    
});

module.exports = mongoose.model('profile', profileSchema);