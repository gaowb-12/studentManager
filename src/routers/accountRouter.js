const express = require("express");
const path = require('path')
const accountCtr = require('../controllers/accountController')

// 创建路由模块
const accountRouter=express.Router()
// 获取登录页面
accountRouter.get("/login",accountCtr.getLoginPage)
// 处理登录逻辑
accountRouter.post("/login",accountCtr.handleLogin)
// 获取图片验证码
accountRouter.get("/vcode",accountCtr.getVcode)
// 获取注册页面
accountRouter.get("/register",accountCtr.getRegisterPage)
// 处理注册逻辑
accountRouter.post("/register",accountCtr.handleRegister)
// 处理注册逻辑
accountRouter.get("/layout",accountCtr.layout)

module.exports=accountRouter