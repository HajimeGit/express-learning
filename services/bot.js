const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const initializeBot = () => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    return new TelegramBot(token, {polling: true});
}

const sendMessage = (bot, chatId, message) => {
    bot.sendMessage(chatId, message);
}

module.exports = {
    initializeBot,
    sendMessage
}