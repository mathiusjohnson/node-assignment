const express = require('express');
const bodyparser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');

const userRoutes = require('./routes/add-user');
const userListRoutes = require('./routes/user-list');

app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes.routes);
app.use(userListRoutes)
app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found!', path: '/'});});

app.listen(3000)