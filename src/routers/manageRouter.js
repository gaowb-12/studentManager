const express = require("express");
const path = require('path')

// 获取路由模块
const manageRouter=express.Router()
manageRouter.get("/list",(req,res)=>{
    res.render('list', {people: [1,2,3]});
})
module.exports=manageRouter