const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
    pageTitle: String,
    contents: String
});

module.exports = mongoose.model('page', pageSchema);


