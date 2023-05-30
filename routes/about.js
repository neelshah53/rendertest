//import express
const express = require('express');
//create router object
const router = express.Router();
//configure  middleware
//GET handler for /About
router.get('/', (req, res, next) =>{
    res.render('about', {title: 'About Us'});
});
//Export it
module.exports = router;
