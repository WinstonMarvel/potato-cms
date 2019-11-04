// API ROUTES FOR JSON CRUD
    // Add Get, Post, Update Delete for each page/post
    
const config = require('../config.json');    
const express = require('express');
const router = express.Router();
const pages = require('../models').pages;
const menus = require('../models').menus;

router.get('/pages', (req,res)=>{
    pages.find({},(err, pages)=>{
        if(err){
            console.log(err);
            res.status(500).json({'success':  false});
        }   
        else{
            var listOfPages= [];
            pages.map((page)=>{
                listOfPages.push({
                    id: page._id,
                    slug: page.slug
                });
            });
            res.status(200).json({'success':  true, listOfPages});
        }
    })
})


router.get('/pages/:pageslug', (req,res)=>{
    pages.findOne({slug:req.params.pageslug},(err, page)=>{
        if(err){
            console.log(err);
            res.status(404).json({'success':  false});
        }   
        else{
            res.status(200).json({'success':  true, page});
        }
    })
})

router.post('/pages', (req,res)=>{
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

router.delete('/pages', (req,res)=>{
    pages.findOneAndRemove({_id: req.body.id}, (err,page)=>{
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
 
router.put('/pages', (req,res)=>{
    // To do : Remove null fields before update
    pages.findOneAndUpdate({_id: req.body.id}, req.body, (err, page)=>{
        console.log(`page ${page} has been updated`);
    });
    res.status(200).json({ success: 'Yes'});
});



router.get('/menus', (req,res)=>{
    menus.find({}, (err, menulist)=>{
        if(err)
            res.status(404).json({success: 'false'});
        else    
            res.status(200).json({success: 'true', menulist});
    });
});

router.post('/menus', (req,res)=>{
    console.log(menuItems);
    menus.create({
        name: req.body.name, 
        items: JSON.parse(req.body.items)
    }, (err, menu)=>{
        if(err)
            res.status(500).json({success: "false"});
        else
            res.status(200).json({success: "true", description: `"${menu.name}" was created successfully`});
    });
});
 

router.delete('/menus', (req,res)=>{
    menus.findOneAndRemove({_id: req.body.id}, (err, menu)=>{
        if(err)
            res.status(500).json({success: "false"});
        else
            res.status(200).json({success: "true", description: `"${menu.name}" was removed successfully`});
    });
});

router.put('/menus', (req,res)=>{
    // To do : Remove null fields before update
    menus.findOneAndUpdate(req.body.id, {
        name: req.body.name, 
        items: JSON.parse(req.body.items)
    }, (err, menu)=>{
        if(err)
            res.status(500).json({success: "false"});
        else
            res.status(200).json({success: "true", description: `"${menu.name}" was updated successfully`});
    });
});

module.exports = router;