const express = require("express");
const path = require('path')

const manageCtr=require("../controllers/manageController")

// 获取路由模块
const manageRouter=express.Router()
// 查
manageRouter.get("/list",manageCtr.getStudentListPage)
// 获取添加页面
manageRouter.get("/add",manageCtr.getAddStudentPage)
// 增
manageRouter.post("/add",manageCtr.addStudentInfo)
// 获取编辑页面
manageRouter.get("/edit/:id",manageCtr.getEditStudentPage)
// 改
manageRouter.post("/edit/:id",manageCtr.editStudentInfo)
// 删
manageRouter.post("/delete/:id",manageCtr.deleteStudentInfo)


module.exports=manageRouter