const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true },
    city: {type: String, required: true},
    hobbies: {type: String, required: true},
    clicks: Number
},{
    timestamps: true,
    
});

module.exports = mongoose.model('profile', profileSchema);