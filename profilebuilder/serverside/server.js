const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json);

const URL = process.env.PROFILE_DATABSE;


mongoose.connect(URL, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true})
.then(() => {
    console.log('Mongo Connected');
}).catch((err) => {
    console.log('Error connecting to mongo');
});

const personRouter = require('./routes/person');
const profileRouter = require('./routes/profiles');

app.use('/', personRouter);
/*app.use('/profiles', profileRouter);*/


app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})
