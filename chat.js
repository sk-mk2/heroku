const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('hello world');
});

app.post('/',(req,res) => {
    res.send('post');
});

app.listen(process.env.PORT ||3000);
