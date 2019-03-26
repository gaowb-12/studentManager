const express = require("express");
const path = require("path");
const server = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");

// 管理静态资源
server.use(express.static("dist/statics"))
server.use(bodyParser.urlencoded())
// 定义模板引擎
server.set('views', path.resolve(__dirname, 'dist/views'));
server.set('view engine','ejs');

server.use("/",(req,res,next)=>{
    console.log(req.username)
    next()
})

// 获取用户路由管理模块
const accountRouter = require("./src/routers/accountRouter")
server.use("/account",accountRouter)

// 获取系统路由管理模块
const manageRouter = require("./src/routers/manageRouter")
server.use("/studentmanager",manageRouter)


server.listen("1024",(err)=>{
    console.log(err)
})