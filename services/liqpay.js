const LiqPay = require('liqpay-sdk-nodejs');
const max = 1000000000;

/**
 * Initializes the LiqPay service.
 *
 * @returns {LiqPay}
 */
const initializeLiqPay = () => {
    require('dotenv').config();

    const publicKey = process.env.LIQPAY_PUBLIC_KEY;
    const privateKey = process.env.LIQPAY_PRIVATE_KEY;

    return new LiqPay(publicKey, privateKey);
}

/**
 * Gets the LiqPay redirect HTML button.
 *
 * @param {LiqPay} liqPay
 *   The LiqPay instance.
 * @param {number} amount
 *   The amount to pay.
 * @param {string} description
 *   The description of the payment.
 *
 * @returns {string}
 *   The HTML button.
 */
const getLiqPayRedirectHtmlButton = (liqPay, amount, description) => {
    return liqPay.cnb_form({
        action: 'pay',
        amount,
        currency: 'UAH',
        description,
        order_id: Math.floor(Math.random() * max),
        version: '3',
        result_url: 'http://localhost:3000',
    });
}

module.exports = {
    initializeLiqPay,
    getLiqPayRedirectHtmlButton
}