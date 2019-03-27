const express = require("express");
const path = require('path')

const manageCtr=require("../controllers/manageController")

// 获取路由模块
const manageRouter=express.Router()
manageRouter.get("/list",manageCtr.getStudentListPage)

module.exports=manageRouter