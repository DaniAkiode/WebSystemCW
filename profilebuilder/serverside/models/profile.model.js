const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstname: {type: String, required: true},
    surname: {type: String, required: true},
    age: {type: Number, required: true },
    city: {type: String, required: true},
    hobbies: {type: String, required: true}
},{
    
    timestamps: true

});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;