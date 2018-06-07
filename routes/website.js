// VIEWABLE ROUTES FOR THE WEBSITE FRONT_END

const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
        res.render('home', {pageTitle: "Test2", content: "dummy Content"});
    });

router.get('/:pagename/:pagenamelevel2?',(req,res)=>{
    // GET MONGO DB DATA HERE OF PAGE NAMES
    if(req.params.pagename !== "about" || req.params.pagenamelevel2 !== "winston" )
        res.render('default', {pageTitle: "404 error occured", content: "We couldn't find it!"});
    else    
        res.render('default', {pageTitle: ""+req.params.pagename+req.params.pagenamelevel2, content: "Test content", sideColumn: "Sample text"});

});    

module.exports = router;