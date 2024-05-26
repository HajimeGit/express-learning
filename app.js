const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const router = require('./routes/router');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/scroll', express.static(path.join(__dirname, 'node_modules/locomotive-scroll/dist')));

app.use('/', router);

app.listen(port);