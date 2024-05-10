const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const liqPayRedirectHtmlButton = require('./services/liqpay');
const bodyParser = require('body-parser');
const { sendMessage, initializeBot } = require('./services/bot');

const bot = initializeBot();

const renderHomePage = (req, res) => {
    res.render('index', { body: liqPayRedirectHtmlButton });
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    renderHomePage(req, res);
});

app.post('/', (req, res) => {
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const { email, phone } = req.body;
    const message = `Here is a new lead: Email: ${email}, Phone: ${phone}`;

    sendMessage(bot, chatId, message);
    renderHomePage(req, res);
});

app.listen(port);