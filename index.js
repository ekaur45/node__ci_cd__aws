const express = require("express");
const app = express();
const port = 3001;

app.get('/',(req,res)=>{
    res.send('<h1>Express demo app some changes</h1><h4>Message: Success</h4><p>Version: 1.0</p>')
})
app.get('/products',(req,res)=>{
    res.send([
        {
            productId:1021,
            price:100
        },
        {
            productId:2012,
            price:150
        }
    ])
})
app.listen(port,()=>{
    console.log('App running...');
})
