const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

router.get('/add-user', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User', 
    path: '/add-user',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })});

router.post('/add-user', (req, res, next) => {
  console.log(req.body.name);
  users.push({ name: req.body.name });
  console.log(users);
  res.redirect('/');
});

exports.routes = router;
exports.users = users;
