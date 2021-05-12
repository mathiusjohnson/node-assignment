const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./user-list');

const router = express.Router();

router.get('/', (req, res, next) => {
  const userNames = adminData.users;
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
