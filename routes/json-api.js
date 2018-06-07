// API ROUTES FOR JSON CRUD
    // Add Get, Post, Update Delete for each page/post
    
const express = require('express');
const router = express.Router();

router.get('/api', (req,res)=>{
    res.json({'success': 'Working'});
})

router.post('/api', (req,res)=>{
    res.json({ success: 'Yes'});
})

router.delete('/api', (req,res)=>{
    res.json({ success: 'Yes'});
})

router.update('/api', (req,res)=>{
    res.json({ success: 'Yes'});
});

module.exports = router;