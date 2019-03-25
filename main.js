const express = require("express");
const path = require("path");
const server = express();
const ejs = require('ejs')

server.use(express.static("src/statics"))

server.set('views', path.resolve(__dirname, 'src/views'));
server.set('view engine','ejs');

server.get("/account/login",(req,res)=>{
    res.render('login', {people: [1,2,3]});
})
server.get("/account/register",(req,res)=>{
    res.render('register', {people: [1,2,3]});
})

// server.get("/studentmanager",(req,res)=>{
//     res.render('login', {people: [1,2,3]});
// })

server.listen("1024",(err)=>{
    console.log(err)
})