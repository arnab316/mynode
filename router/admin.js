const express = require('express')
const path = require('path')
const router = express.Router();
const userData = [];
router.get('/', (req,res)=>{
    res.render('admin', {pageTitle: 'add User'})

})
router.post('/users', (req,res)=>{
    userData.push({name: req.body.username})
    res.redirect('/users')

})

exports.routes = router;
exports.userData = userData;