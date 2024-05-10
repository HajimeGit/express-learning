const liqPay = require('liqpay-sdk-nodejs');
require('dotenv').config();

const publicKey = process.env.LIQPAY_PUBLIC_KEY;
const privateKey = process.env.LIQPAY_PRIVATE_KEY;

const liqpay = new liqPay(publicKey, privateKey);

const liqPayRedirectHtmlButton = liqpay.cnb_form({
    'action': 'pay',
    'amount': '1',
    'currency': 'USD',
    'description': 'description text',
    'order_id': 'order_id_1',
    'version': '3',
    'result_url': 'http://localhost:3000',
    'server_url': 'http://localhost:3000'
});

module.exports = liqPayRedirectHtmlButton;