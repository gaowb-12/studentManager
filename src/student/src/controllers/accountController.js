/**
 *处理账号相关的业务逻辑
 */
/**
* 当一个js文件中要暴露多个对象的时候，可以适应exports,前面的module可以省略
 */
const fs = require('fs')
const path = require('path')

const captchapng = require('captchapng');

const databasemanager = require(path.join(__dirname,'../tools/databasemanager.js'))

//获取登录页面
exports.getLoginPage = (req,res)=>{
    fs.readFile(path.join(__dirname,'../views/login.html'),(err,data)=>{
      res.setHeader("Content-Type","text/html;charset=utf8")
      res.end(data);
    })
}

//获取验证码 返回图片
exports.getVcodeImage = (req,res)=>{
     /**
      * 1.生成随机数字图片(captchapng) https://www.npmjs.com/package/captchapng
      * 2.在服务器中记住上面生成的随机数字，方便后面登录时候使用
      * 3.返回
      */
      var vcode = parseInt(Math.random()*9000+1000);

      //通过req.session获取到的就是专属于某个浏览器的内存空间
      req.session.vcode = vcode;

      var p = new captchapng(80,30,vcode); // width,height,numeric captcha 
        p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha) 
        p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 
 
        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        res.writeHead(200, {
            'Content-Type': 'image/png'
        });
        res.end(imgbase64);
}

//登录的业务逻辑处理
exports.login = (req,res)=>{
   
   //验证码校验
   /**
   if (req.session.vcode!=req.body.vcode) {
      res.end("<script>alert('验证码有误');window.location.href='/account/login'</script>");
      return
   }

   //查询数据库
   databasemanager.findOne('account',{username:req.body.username,password:req.body.password},(err,doc)=>{
          if (doc==null) {
            res.end("<script>alert('用户名或是密码有误');window.location.href='/account/login'</script>");
          }else{
            //记住我们的登录信息
            req.session.username = req.body.username;

            res.end("<script>window.location.href='/studentmanager/list?everyPageCount=2&currentPageIndex=0'</script>");
          }
   })
   **/
   const result = {status:1,message:"登录成功"}

   //验证码验证
   if (req.session.vcode!=req.body.vcode) {
      result.status = 2;
      result.message = "验证码错误"
      res.json(result);
      return
   }

   //查询数据库,判断用户是否存在
   databasemanager.findOne('account',{username:req.body.username,password:req.body.password},(err,doc)=>{
          if (doc==null) {
            result.status = 3;
            result.message = "用户名或是密码有误";
            res.json(result)
          }else{
            //记住我们的登录信息
            req.session.username = req.body.username;

            res.json(result);
          }
   })

}

//退出
exports.logout = (req,res)=>{
  //将曾经的用户状态清空
  req.session.username = null;
  //跳转到登录页面
  res.end("<script>window.location.href='/account/login'</script>");
}

//获取注册页面
exports.getRegisterPage = (req,res)=>{
  fs.readFile(path.join(__dirname,"../views/register.html"),(err,data)=>{
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.end(data);
  })
}

//注册
exports.register = (req,res)=>{
  const result = {status:1,message:"注册成功"}

  //1.先去我们的数据库中查询该用户名是否存在，如果存在给用户提示
  databasemanager.findOne('account',{username:req.body.username},(err,doc)=>{
      if (doc!=null) {
            result.status = 3;
            result.message = "用户名存在了"

            res.json(result)
      }else{
          //真正的新增用户
          const params = {
            username:req.body.username,
            password:req.body.password
          }
          
          databasemanager.insertOne('account',params,(err,doc)=>{
              if (doc==null) {
                result.status = 0;
                result.message = "注册失败";
              }

              res.json(result);
          })
      }
  })


}
