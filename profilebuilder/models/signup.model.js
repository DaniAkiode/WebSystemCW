//Require Mongoose
const mongoose = require("mongoose");

//Create new schema for Database
const SignUpSchema = new mongoose.Schema({
    fullname:{type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true },
    password: {type: String, required: true},
},{
    timestamps: true,
});

module.exports = mongoose.model('Users', SignUpSchema);