const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const db = require('./db');

const initializeBot = () => {
    const token = process.env.TELEGRAM_BOT_TOKEN;

    const options = {
        polling: true
    };

    return new TelegramBot(token, options);
}

const run = (bot) => {
    setUpStartCommand(bot);
}

/**
 * Sets up the /start command.
 *
 * @param {TelegramBot} bot
 *   The bot instance.
 *
 *  @returns {TelegramBot}
 */
const setUpStartCommand = (bot) => {
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        let message = 'Вітаю! Тепер ви будете отримувати інформацію про нових клієнтів з сайту https://example.com';

        if (listenerExists(chatId)) {
            message = 'Ви вже підписані на отримання інформації про нових клієнтів';
        }
        else {
            saveListener(chatId);
        }

        bot.sendMessage(chatId, message);
    });

    return bot;
}

const saveListener = (chatId) => {
    db.insert('INSERT INTO clients (chat_id) VALUES (?)', [chatId]);
}

const listenerExists = (chatId) => {
    return db.query('SELECT * FROM clients WHERE chat_id = ?', [chatId]);
}

module.exports = {
    initializeBot,
    run
}