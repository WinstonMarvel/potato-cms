// VIEWABLE ROUTES FOR THE WEBSITE FRONT_END

const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
        res.render('home', {pageTitle: "Test2", content: "dummy Content"});
    });

router.get('/:pagename/:pagenamelevel2?',(req,res)=>{
    res.render('default', {pageTitle: ""+req.params.pagename+req.params.pagenamelevel2, content: "Test content", sideColumn: "Sample text"});

});    

module.exports = router;