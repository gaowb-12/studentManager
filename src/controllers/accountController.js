const path = require("path")
const database=require("../model/databaseManager")

// 返回登录页面(get)
exports.getLoginPage=(req,res)=>{
    res.render('login', {people: [1,2,3]});
}

// 处理登录页面逻辑(post)
exports.handleLogin=(req,res)=>{
    const result = {status:1,message:"登录成功"}
    database.findOne("account",{username:req.body.username},(err,docs)=>{
        if(!docs){
            result.status=0;
            result.message="账户不存在"
        }
        res.json(result);
    })
}