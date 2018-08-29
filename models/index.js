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
    contents: String,
    bannerOverride : String,
    seoTitle: String,
    seoKeywords: String,
    seoDescription: String
});


const menuSchema = mongoose.Schema({
    name : {
        type: String,
        unique: true
    },
	items : [
        {
            text: String,
            link: String
        }
    ]
});


module.exports = {
    pages:   mongoose.model('page', pageSchema),
    menus:   mongoose.model('menu', menuSchema)
}
