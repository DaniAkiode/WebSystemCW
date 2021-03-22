//Declare Vairables 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connect to Mongo

const uri = process.env.PDB;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => {
    console.log('connected to mongo!');
}).catch((err) => {
    console.error('Error connecting to mongo', err);
});

//Add routers 
const ProfileRouter = require('./routes/profiles');
const UserAcRouter = require('./routes/signup');

if (process.env.NODE_ENV ==='production') {
    app.use(express.static('build'));
}

app.use('/api', ProfileRouter);
app.use('/users', UserAcRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
