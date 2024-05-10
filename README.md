# Express.js LiqPay Integration
This project demonstrates how to integrate the LiqPay payment gateway into an Express.js application.

## Tech Stack
- Express.js
- LiqPay Node.js SDK

## How to use
1. Clone the repo
``` bash
git clone https://github.com/HajimeGit/express-liqpay-button.git
```

2. Install dependencies
``` bash
npm install
```

3. Set up .env
   Set LIQPAY_PUBLIC_KEY and LIQPAY_PRIVATE_KEY in .env file. See example.

4. Start the express server
``` bash
node app.js
```

## Usage
Once the server is running, you can access the payment form by visiting http://localhost:3000 in your web browser.
The payment form includes the necessary hidden fields and a LiqPay SDK button. When the "Сплатити" (Pay) button is clicked, it will redirect the user to the LiqPay payment gateway.
  
