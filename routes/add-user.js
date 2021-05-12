const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /admin/add-product => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User', 
    path: '/add-user',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })});
// /admin/add-product => POST
router.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.name });
  res.redirect('/');
});
module.exports = router;