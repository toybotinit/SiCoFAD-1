const mongoose = require('mongoose');

const URI = 
'mongodb+srv://admin:12345@cluster0.vzsfz.mongodb.net/SiCoFADDB?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('db is conected'))
    .catch(err => console.err(err))
    ;


module.exports = mongoose;