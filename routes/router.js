const express = require('express');
const router = express.Router();
const { initializeBot, run } = require("../services/bot");
const { initializeLiqPay, getLiqPayRedirectHtmlButton } = require("../services/liqpay");

const bot = initializeBot();
run(bot)

const liqPay = initializeLiqPay();

const renderHomePage = (req, res) => {
    res.render('index', {
        liyPayButton: getLiqPayRedirectHtmlButton(liqPay, 500, 'Buy a subscription')
    });
}

router.get('/', function(req, res, next) {
    try {
        renderHomePage(req, res);
    } catch(err) {
        console.error(`Error while rendering home page `, err.message);
        next(err);
    }
});

router.post('/', function(req, res, next) {
    try {
        const chatId = process.env.TELEGRAM_CHAT_ID;
        const { email, phone } = req.body;
        const message = `Here is a new lead: Email: ${email}, Phone: ${phone}`;

        bot.sendMessage(chatId, message);
        res.redirect('https://t.me/express_hajime_bot');
    } catch(err) {
        console.error(`Error while sending the data to telegram `, err.message);
        next(err);
    }
});

module.exports = router;