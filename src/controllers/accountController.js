const path = require("path")
const database=require("../model/databaseManager")

// 返回登录页面(get)
exports.getLoginPage=(req,res)=>{
    res.render('login', {people: [1,2,3]});
}
// 处理登录页面逻辑(post)
exports.handleLogin=(req,res)=>{
    const result = {status:1,message:"登录成功"}
    database.findOne("account",{username:req.body.username,password:req.body.password},(err,docs)=>{
        if(!docs){
            result.status=0;
            result.message="账户或密码错误！"
        }
        res.json(result);
    })
}

// 返回注册页面(get)
exports.getRegisterPage=(req,res)=>{
    res.render('register', {people: [1,2,3]});
}
// 处理注册页面逻辑(post)
exports.handleRegister=(req,res)=>{
    const result = {status:1,message:"注册成功"}
    database.findOne("account",{username:req.body.username},(err,docs)=>{
        if(!docs){
            database.insertOne("account",{username:req.body.username,password:req.body.username},(err,docs)=>{
                if(err)
                    console.log(err)
            })
        }else{
            result.status=0;
            result.message="账户已注册！"
        }
        res.json(result);
    })
}