const path = require("path")
var captchapng = require('captchapng');
const database=require("../model/databaseManager")

// 返回登录页面(get)
exports.getLoginPage=(req,res)=>{
    res.render('login', {people: [1,2,3]});
}

// 返回验证码
exports.getVcode=(req,res)=>{
    var code = parseInt(Math.random() * 9000 + 1000);//有且仅有4个数字
    req.session.vcode=code;
    console.log(req.session.vcode) 
    var p = new captchapng(100, 30, code);//宽100 高30 四位数字
    p.color(0, 0, 0, 0);//底色
    p.color(80, 80, 80, 255);//字体颜色
    var img = p.getBase64();//转换成base64
    var imgbase64 = new Buffer(img, 'base64');// 存放在imgbase64
    
    res.setHeader("Content-Type","image/png;")
    res.end(imgbase64);
}
// 处理登录页面逻辑(post)
exports.handleLogin=(req,res)=>{
    const result = {status:1,message:"登录成功"}
    console.log(req.session.vcode)
    if(req.body.vcode!=req.session.vcode){
        result.status = 2;
        result.message = "验证码错误"
        res.json(result);
        return ;
    }
    database.findOne("account",{username:req.body.username,password:req.body.password},(err,docs)=>{
        if(!docs){
            result.status=0;
            result.message="账户或密码错误！"
        }else{
            req.session.username=req.body.username
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
// 退出
exports.layout=(req,res)=>{
    req.session.username=null;
    res.setHeader("Content-Type","text/html;charset=utf8;")
    res.end("<script>window.location.href='/account/login'</script>");
}