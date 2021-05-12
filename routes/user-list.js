const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./add-user');

console.log('admin data: ', adminData);

const router = express.Router();

router.get('/', (req, res, next) => {
  const userNames = adminData.users;
  console.log('usernames:', userNames);
  res.render('users', {
    userNames: userNames, 
    pageTitle: 'users', 
    path: '/', 
    hasProducts: userNames && userNames.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
