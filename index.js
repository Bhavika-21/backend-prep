require("dotenv").config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('<h1>hey, youre on home page🏘</h1>')
})

app.listen(port, ()=>{
    console.log(`you're server is running on ${port}`);
})