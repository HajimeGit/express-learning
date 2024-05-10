const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const liqPayRedirectHtmlButton = require('./services/liqpay');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { body: liqPayRedirectHtmlButton });
});

app.listen(port);