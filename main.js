const express = require("express");
const path = require("path");
const server = express();
require('ejs');
const bodyParser = require("body-parser");
const session = require("express-session");

// 管理静态资源
server.use(express.static("dist/statics"))
// 处理post请求里的body，req.body能够访问
server.use(bodyParser.urlencoded())

// 管理session cookie
server.use(session({ secret: 'keyboard cat', cookie: { maxAge: 100000 }}))

// 定义模板引擎
server.set('views', path.resolve(__dirname, 'dist/views'));
server.set('view engine','ejs');

server.use("/",(req,res,next)=>{
    if(req.url.includes("/account/login")||req.url.includes("/account/register")||req.url.includes("/account/vcode")||req.url.includes("/favicon")){
        next()
    }else{
        if(req.session.username){
            next()
        }else{
            res.setHeader("Content-Type","text/html;charset=utf8")
            res.end("<script>alert('您还没有登录,请先登录!');window.location.href='/account/login'</script>");
        }
    }
})

// 获取用户路由管理模块
const accountRouter = require("./src/routers/accountRouter")
server.use("/account",accountRouter)

// 获取系统路由管理模块
const manageRouter = require("./src/routers/manageRouter")
server.use("/studentmanager",manageRouter)


server.listen("1024",(err)=>{
    console.log(err)
})