const express = require('express')
const app = express()
const bodyParser = require('body-parser')
  
// create application/json parser
const jsonParser = bodyParser.json()
 
const randstring = require('randomstring')
const midtransClient = require('midtrans-client');

// Create Snap API instance
let snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: 'SB-Mid-server-3tRgnYTQ_dItAv3674gNnexW'
});


app.post("/api", jsonParser, (req, res) => {
    snap.createTransaction({
        "transaction_details": {
            "order_id": randstring.generate(),
            "gross_amount": Number(req.body.amount)
        },
        "credit_card": {
            "secure": true
        },
        "customer_details": {
            "first_name": "Dias",
            "last_name": "Gay",
            "email": "diasgay@gmail.com",
            "phone": "08111222333"
        }
    })
        .then((transaction) => {
            // transaction token
            transactionToken = transaction.token;
            console.log('transactionToken:', transactionToken);


        })
    res.send(transactionToken)
    console.log(`success, amount :${req.body.amount}`)
})



app.listen(5000, () => { console.log("server started on 5000") })