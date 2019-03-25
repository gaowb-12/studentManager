const express = require("express");
const path = require("path");
const server = express();
const ejs = require('ejs')

server.use(express.static("statics"))

server.set('view engine','ejs');
people = ['geddy', 'neil', 'alex'],
html = ejs.render('./src/views/login.html', {people: people});

server.get("/",(req,res)=>{
    res.send(html)
})

server.listen("1024",(err)=>{
    console.log(err)
})