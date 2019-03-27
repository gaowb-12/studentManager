const express = require("express");
const path = require('path')
const accountCtr = require('../controllers/accountController')

// 创建路由模块
const accountRouter=express.Router()
// 获取登录页面
accountRouter.get("/login",accountCtr.getLoginPage)
// 登录
accountRouter.post("/login",accountCtr.handleLogin)
// 注册
accountRouter.get("/register",accountCtr.getRegisterPage)
// 注册
accountRouter.post("/register",accountCtr.handleRegister)

module.exports=accountRouter