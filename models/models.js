const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
    slug: {
        type: String,
        unique: true,
        trim : true,
        lowercase: true,     
        maxlength: 100
    },
    pageTitle: {
    	type: String 
    },
    contents: String
});


const menuSchema = mongoose.Schema({
    name : {
        type: String,
        unique: true
    },
	items : Array
});


module.exports = {
    pages:   mongoose.model('page', pageSchema),
    menus:   mongoose.model('menu', menuSchema)
}
