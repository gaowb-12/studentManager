//导包
const express = require('express')
const path = require('path')

//创建路由对象
const studentManagerRouter = express.Router()
const studentManagerCtrl = require(path.join(__dirname,'../controllers/studentManagerController.js'))

//获取学生列表页面
studentManagerRouter.get('/list',studentManagerCtrl.getStudentListPage)
//获取新增页面
studentManagerRouter.get('/add',studentManagerCtrl.getAddPage)
//新增业务处理
studentManagerRouter.post('/add',studentManagerCtrl.addStudent)
//获取修改的页面
studentManagerRouter.get('/edit/:studentId',studentManagerCtrl.getEditPage)
//修改学生的逻辑
studentManagerRouter.post('/edit/:studentId',studentManagerCtrl.editStudent)
//删除学生逻辑
studentManagerRouter.get('/delete/:studentId',studentManagerCtrl.deleteStudent)

//导出
module.exports = studentManagerRouter
