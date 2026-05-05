const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
    .then(db => console.log('MongoDB is connected'))
    .catch(err => console.error(err));