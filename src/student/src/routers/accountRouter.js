'use strict'

//导包
const express = require('express')
const path = require('path')

//创建路由对象
const accountRouter = express.Router()
const accountCtrl = require(path.join(__dirname,'../controllers/accountController.js'))

//请求，处理，响应
//获取登录页面
accountRouter.get('/login',accountCtrl.getLoginPage)
//获取验证码
accountRouter.get('/vcode',accountCtrl.getVcodeImage)
//登录逻辑处理
accountRouter.post('/login',accountCtrl.login)
//退出逻辑
accountRouter.get('/logout',accountCtrl.logout)
//获取注册页面
accountRouter.get('/register',accountCtrl.getRegisterPage)
//注册逻辑处理
accountRouter.post('/register',accountCtrl.register)

//导出
module.exports = accountRouter
