'use strict'

//导包
const path = require('path')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

//create app
const app = express();

// parse application/x-www-form-urlencoded bodyParser中间件
app.use(bodyParser.urlencoded({ extended: false }))

//使用session中间件,maxAge:如果连续一分钟不操作，我们的密码条就失效
//一般网站是建议 30 分钟，安全性级别比较高的，2分钟以后，安全级别特别高的，用完立马失效
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

//处理静态资源
app.use(express.static(path.join(__dirname,'src/statics')))

//权限验证
app.all('/*',(req,res,next)=>{
  console.log(req);
  if (req.url == '/account/login' || req.url == '/account/logout' || req.url.includes('/account/vcode') || req.url.includes('register')) {
    next();
  }else{//真正的权限验证
      if (req.session.username==null) {
        res.end("<script>alert('您还没有登录,请先登录!');window.location.href='/account/login'</script>");
      }else{
        next();
      }
  }
})

//路由处理
const accountRouter = require(path.join(__dirname,'src/routers/accountRouter.js'))
app.use('/account',accountRouter)

const studentManagerRouter = require(path.join(__dirname,'src/routers/studentManagerRouter.js'))
app.use('/studentmanager',studentManagerRouter)

//开启web服务
app.listen(3000,'127.0.0.1',(err)=>{
  if (err) {
    console.log(err);
  }
  console.log("start success!");
})
