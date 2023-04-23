const express = require('express')
const path = require('path')
const router = express.Router();


const adminData = require('./admin');

router.get('/users', (req, res)=>{
  const usersdata = adminData.userData;
  // console.log(user.lenght);
    res.render('users', {pageTitle:'usersList', user:usersdata})
})

module.exports = router;