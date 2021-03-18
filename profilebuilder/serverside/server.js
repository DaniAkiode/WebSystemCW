const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongoose.Promise = global.Promise
const uri = process.env.PDB;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log('connected to mongo!');
}).catch((err) => {
    console.error('Error connecting to mongo', err);
});

//const connection = mongoose.connection; 
//connection.once('open', () => {
    //console.log("MongoDB database connection established successfully");
//})


const ProfileRouter = require('./routes/profiles');

app.use('/api', ProfileRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
