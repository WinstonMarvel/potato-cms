// API ROUTES FOR JSON CRUD
    // Add Get, Post, Update Delete for each page/post
    
const config = require('../config.json');    
const express = require('express');
const router = express.Router();
const pages = require('../models/models').pages;

router.get('/', (req,res)=>{
    pages.find({},(err, pagelist)=>{
        if(err){
            console.log(err);
            res.status(404).json({'success':  false});
        }   
        else
            res.status(404).json({'success':  true, pagelist});
    })
})

router.post('/', (req,res)=>{
    // To do:
        // Ensure Unique pageTitle. Ensure pageTitle is _id
        // Validate page names. Remove whitespaces and special characters.
    pages.create(req.body, (err,page)=>{
        if(err){
            console.log(err);
            res.status(500).json({ 'success': false, 'description' : `0 pages added`});
        }
        else{
            console.log('Added one new page');  
            res.status(201).json({ success: 'Yes',  'description' : `One new page titled '${page.pageTitle}' was added`});  
        }
    });
    
})

router.delete('/', (req,res)=>{
    pages.findOneAndRemove({pageTitle: req.body.pageTitle}, (err,page)=>{
        if(err){
            console.log(`Error encountered: ${err}`);
            res.status(500).json({ 'success': false, 'description' : `${page.pageTitle} not removed`});
        }
        else{
            console.log(`Page removed : ${page.pageTitle}`);
            res.status(200).json({ 'success': true, 'description': `${page.pageTitle} Removed`});
        }
    })
})

router.put('/', (req,res)=>{
    pages.findOneAndUpdate({pageTitle: req.body.pageTitle}, req.body, (err, page)=>{
        console.log(`page ${page} has been updated`);
    });
    res.status(200).json({ success: 'Yes'});
});

module.exports = router;