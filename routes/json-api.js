// API ROUTES FOR JSON CRUD
    // Add Get, Post, Update Delete for each page/post
    
const express = require('express');
const router = express.Router();

router.get('/api',(req,res)=>{
        res.json({'success': 'Working'});
    });

module.exports = router;