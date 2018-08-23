// VIEWABLE ROUTES FOR THE WEBSITE FRONT_END
const config = require('../config.json');
const express = require('express');
const router = express.Router();
const pages = require('../models/models.js').pages;
const menus = require('../models/models.js').menus;

router.get('/',(req,res)=>{
    res.render('home', {pageTitle: "Home", content: "This is our homepage"});
});

router.get('/:pagename',(req,res, next)=>{
    pages.findOne({slug: req.params.pagename}, (err, page)=>{
        if(err){
            console.log(err);
            res.render('home', {pageTitle: "ERROR", content: "Internal ERROR"});
        }
        else if(!page){
            res.render('home', {pageTitle: "404", content: "Sorry. No such page was found."});
        }   
        else
            renderPage(res, page);
            // res.render('default', {pageTitle: page.pageTitle, content: page.contents, sideColumn: 'No data yet'});
    });
});


// router.get('/:pagename/:pagenamelevel2?',(req,res)=>{
//     // GET MONGO DB DATA HERE OF PAGE NAMES
//     if(req.params.pagename !== "about" || req.params.pagenamelevel2 !== "winston" )
//         res.render('default', {pageTitle: "404 error occured", content: "We couldn't find it!"});
//     else    
//         res.render('default', {pageTitle: ""+req.params.pagename+req.params.pagenamelevel2, content: "Test content", sideColumn: "Sample text"});

// });    
 
let renderPage = function(res, page){
    menus.findOne({name: 'defaultMenu'}, function(err, menu){
        console.log(menu);
        res.render('default', {pageTitle: page.pageTitle, content: page.contents, sideColumn: 'No data yet', menuItems: menu.items});
    });
}

module.exports = router;