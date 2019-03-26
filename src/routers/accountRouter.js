const express = require("express");
const path = require('path')
const accountCtr = require('../controllers/accountController')

// 创建路由模块
const accountRouter=express.Router()
// 登录
accountRouter.get("/login",accountCtr.getLoginPage)
// 登录
accountRouter.post("/login",accountCtr.handleLogin)
// 注册
accountRouter.get("/register",(req,res)=>{
    res.render('register', {people: [1,2,3]});
})

module.exports=accountRouter