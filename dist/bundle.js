/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst server = express();\r\n__webpack_require__(/*! ejs */ \"ejs\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nconst session = __webpack_require__(/*! express-session */ \"express-session\");\r\nconst multer = __webpack_require__(/*! multer */ \"multer\");\r\n\r\n// 管理静态资源\r\nserver.use(express.static(\"dist/statics\"))\r\n// 处理post请求里的body，req.body能够访问\r\nserver.use(bodyParser.urlencoded())\r\nserver.use(bodyParser.raw())\r\n// 通过multer中间件解析上传的文件\r\nserver.use(multer({dest:\"./dist/upload\"}).any())\r\n\r\n// 管理session cookie\r\nserver.use(session({ secret: 'keyboard cat', cookie: { maxAge: 10000000 }}))\r\n\r\n// 定义模板引擎\r\nserver.set('views', path.resolve(__dirname, 'dist/views'));\r\nserver.set('view engine','ejs');\r\n\r\nserver.use(\"/\",(req,res,next)=>{\r\n    if(req.url.includes(\"/account/login\")||req.url.includes(\"/account/register\")||req.url.includes(\"/account/vcode\")||req.url.includes(\"/favicon\")){\r\n        next()\r\n    }else{\r\n        if(req.session.username){\r\n            next()\r\n        }else{\r\n            res.setHeader(\"Content-Type\",\"text/html;charset=utf8\")\r\n            res.end(\"<script>alert('您还没有登录,请先登录!');window.location.href='/account/login'</script>\");\r\n        }\r\n    }\r\n})\r\n\r\n// 获取用户路由管理模块\r\nconst accountRouter = __webpack_require__(/*! ./src/routers/accountRouter */ \"./src/routers/accountRouter.js\")\r\nserver.use(\"/account\",accountRouter)\r\n\r\n// 获取系统路由管理模块\r\nconst manageRouter = __webpack_require__(/*! ./src/routers/manageRouter */ \"./src/routers/manageRouter.js\")\r\nserver.use(\"/studentmanager\",manageRouter)\r\n\r\nserver.post(\"/upload\",(req,res)=>{\r\n    console.log(req.files)\r\n    console.log(req.body)\r\n    res.end(\"上传成功\")\r\n})\r\nserver.listen(\"1024\",(err)=>{\r\n    console.log(err)\r\n})\n/* WEBPACK VAR INJECTION */}.call(this, \"\"))\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/controllers/accountController.js":
/*!**********************************************!*\
  !*** ./src/controllers/accountController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\")\r\nvar captchapng = __webpack_require__(/*! captchapng */ \"captchapng\");\r\nconst database=__webpack_require__(/*! ../model/databaseManager */ \"./src/model/databaseManager.js\")\r\n\r\n// 返回登录页面(get)\r\nexports.getLoginPage=(req,res)=>{\r\n    res.render('login', {people: [1,2,3]});\r\n}\r\n\r\n// 返回验证码\r\nexports.getVcode=(req,res)=>{\r\n    var code = parseInt(Math.random() * 9000 + 1000);//有且仅有4个数字\r\n    req.session.vcode=code;\r\n    var p = new captchapng(100, 30, code);//宽100 高30 四位数字\r\n    p.color(0, 0, 0, 0);//底色\r\n    p.color(80, 80, 80, 255);//字体颜色\r\n    var img = p.getBase64();//转换成base64\r\n    var imgbase64 = new Buffer(img, 'base64');// 存放在imgbase64\r\n    \r\n    res.setHeader(\"Content-Type\",\"image/png;\")\r\n    res.end(imgbase64);\r\n}\r\n// 处理登录页面逻辑(post)\r\nexports.handleLogin=(req,res)=>{\r\n    const result = {status:1,message:\"登录成功\"}\r\n    if(req.body.vcode!=req.session.vcode){\r\n        result.status = 2;\r\n        result.message = \"验证码错误\"\r\n        res.json(result);\r\n        return ;\r\n    }\r\n    database.findOne(\"account\",{username:req.body.username,password:req.body.password},(err,docs)=>{\r\n        if(!docs){\r\n            result.status=0;\r\n            result.message=\"账户或密码错误！\"\r\n        }else{\r\n            req.session.username=req.body.username\r\n        }\r\n        res.json(result);\r\n    })\r\n}\r\n// 返回注册页面(get)\r\nexports.getRegisterPage=(req,res)=>{\r\n    res.render('register', {people: [1,2,3]});\r\n}\r\n// 处理注册页面逻辑(post)\r\nexports.handleRegister=(req,res)=>{\r\n    const result = {status:1,message:\"注册成功\"}\r\n    database.findOne(\"account\",{username:req.body.username},(err,docs)=>{\r\n        if(!docs){\r\n            database.insertOne(\"account\",{username:req.body.username,password:req.body.username},(err,docs)=>{\r\n                if(err)\r\n                    console.log(err)\r\n            })\r\n        }else{\r\n            result.status=0;\r\n            result.message=\"账户已注册！\"\r\n        }\r\n        res.json(result);\r\n    })\r\n}\r\n// 退出\r\nexports.layout=(req,res)=>{\r\n    req.session.username=null;\r\n    res.setHeader(\"Content-Type\",\"text/html;charset=utf8;\")\r\n    res.end(\"<script>window.location.href='/account/login'</script>\");\r\n}\n\n//# sourceURL=webpack:///./src/controllers/accountController.js?");

/***/ }),

/***/ "./src/controllers/manageController.js":
/*!*********************************************!*\
  !*** ./src/controllers/manageController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\")\r\nconst database=__webpack_require__(/*! ../model/databaseManager */ \"./src/model/databaseManager.js\")\r\n\r\n// 获取学生列表\r\nexports.getStudentListPage=(req,res)=>{\r\n    // 获取当前页\r\n    const currentPageIndex=parseInt(req.query.currentPageIndex)||0;\r\n    // 每页的数据条数\r\n    const everyPageCount=parseInt(req.query.everyPageCount)||4;\r\n    // 获取搜索关键字\r\n    const keyword=req.query.keyword||\"\";\r\n\r\n    // 获取总条数\r\n    database.getCount(\"studentInfos\",{name:{$regex:keyword}},(err,count)=>{\r\n        // 跳过多少条数据\r\n        const skipCount=currentPageIndex*everyPageCount;\r\n        // 计算有多少页\r\n        const totalPage=count%everyPageCount>0?parseInt(count/everyPageCount)+1:count/everyPageCount\r\n        // 页数变成数组\r\n        const totalPageArray=[];\r\n        for(var i =0;i<totalPage;i++){\r\n            totalPageArray.push(i);\r\n          }\r\n          \r\n        // 返回当前页的结果\r\n        database.find(\"studentInfos\",{name:{$regex:keyword}},skipCount,everyPageCount,(err,docs)=>{\r\n            if(err){\r\n                console.log(err)\r\n            }\r\n            res.render('parent', {template:\"list\",list: docs,keyword,username:req.session.username,totalPage,totalPageArray,currentPageIndex});\r\n        })\r\n    })\r\n}\r\n// 获取新增学生页面\r\nexports.getAddStudentPage=(req,res)=>{\r\n    res.render('parent',{template:\"add\",username:req.session.username})\r\n}\r\n// 增加学生信息\r\nexports.addStudentInfo=(req,res)=>{\r\n    const studentInfo={\r\n        ...req.body\r\n    }\r\n    database.insertOne(\"studentInfos\",studentInfo,(err,doc)=>{\r\n        res.setHeader(\"Content-Type\",\"text/html;charset=utf8;\")\r\n        if (doc!=null) {\r\n            res.end(\"<script>window.location.href='/studentmanager/list?everyPageCount=4&currentPageIndex=0'</script>\");\r\n        }else{\r\n            res.end(\"<script>alert('新增失败');</script>\")\r\n        }\r\n    })\r\n}\r\n// 获取编辑页面\r\nexports.getEditStudentPage=(req,res)=>{\r\n    const _id= req.params.id\r\n    database.findOne(\"studentInfos\",{_id:database.ObjectId(_id)},(err,doc)=>{\r\n        res.render('parent',{template:\"edit\",studentInfo:{...doc},username:req.session.username})\r\n    })\r\n}\r\n// 编辑学生信息\r\nexports.editStudentInfo=(req,res)=>{\r\n    const _id= req.params.id;\r\n    req.body.age=parseInt(req.body.age)\r\n    const studentInfos={\r\n        ...req.body\r\n    }\r\n    database.updateOne(\"studentInfos\",{_id:database.ObjectId(_id)},{$set:studentInfos},(err,doc)=>{\r\n        res.setHeader(\"Content-Type\",\"text/html;charset=utf8;\")\r\n        if (doc!=null) {\r\n            res.end(\"<script>window.location.href='/studentmanager/list?everyPageCount=4&currentPageIndex=0';alert('保存成功');</script>\");\r\n        }else{\r\n            res.end(\"<script>alert('新增失败');</script>\")\r\n        }\r\n    })\r\n}\r\n// 删除学生信息\r\nexports.deleteStudentInfo=(req,res)=>{\r\n    const result={status:1,message:\"删除成功！\"}\r\n    const _id= req.params.id;\r\n    database.deleteOne(\"studentInfos\",{_id:database.ObjectId(_id)},(err,doc)=>{\r\n        if (!doc) {\r\n            result.status=0;\r\n            result.message=\"删除失败！\"\r\n        }\r\n        res.json(result)\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/controllers/manageController.js?");

/***/ }),

/***/ "./src/model/databaseManager.js":
/*!**************************************!*\
  !*** ./src/model/databaseManager.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongodb = __webpack_require__(/*! mongodb */ \"mongodb\");\r\nconst mongoClient = mongodb.MongoClient;\r\n\r\n// 处理数据库id\r\nconst ObjectId = mongodb.ObjectId\r\nexports.ObjectId = ObjectId\r\n\r\nconst url=\"mongodb://localhost:27017\";//数据库地址\r\n\r\n// 封装获取db对象\r\nfunction getDB(callback){\r\n    mongoClient.connect(url, (err, client)=>{\r\n        if (err) {\r\n          console.log(err)\r\n        }\r\n        callback(err,client);\r\n    });\r\n}\r\n// 查询一条数据\r\nexports.findOne=(collectionName,collectionCondition,callback)=>{\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        // 查询\r\n        collection.findOne(collectionCondition,(err, doc)=>{\r\n            callback(err,doc)\r\n            client.close()\r\n        });\r\n    })\r\n}\r\n\r\n// 查询多条数据\r\nexports.find=(collectionName,collectionCondition,skipCount,limitCount,callback)=>{\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        // 查询\r\n        collection.find(collectionCondition).skip(skipCount).limit(limitCount).toArray((err, arrayDocs)=>{\r\n            callback(err,arrayDocs)\r\n            client.close()\r\n        });\r\n    })\r\n}\r\n//查询符合条件的总个数\r\nexports.getCount = (collectionName,collectionCondition,callback)=>{\r\n    //1.获取到db对象\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        collection.find(collectionCondition).count((err,count)=>{\r\n             if (err) {\r\n              console.log(err)\r\n             }\r\n             callback(err,count)\r\n             client.close();\r\n        })\r\n    })\r\n}\r\n// 插入一条数据\r\nexports.insertOne=(collectionName,collectionCondition,callback)=>{\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        // 查询\r\n        collection.insertOne(collectionCondition,(err, doc)=>{\r\n            callback(err,doc)\r\n            client.close()\r\n        });\r\n    })\r\n}\r\n// 修改一条数据\r\nexports.updateOne=(collectionName,collectionCondition,set,callback)=>{\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        // 查询\r\n        collection.updateOne(collectionCondition,set,(err, doc)=>{\r\n            callback(err,doc)\r\n            client.close()\r\n        });\r\n    })\r\n}\r\n// 删除数据\r\nexports.deleteOne=(collectionName,collectionCondition,callback)=>{\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        // 查询\r\n        collection.deleteOne(collectionCondition,(err, doc)=>{\r\n            callback(err,doc)\r\n            client.close()\r\n        });\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/model/databaseManager.js?");

/***/ }),

/***/ "./src/routers/accountRouter.js":
/*!**************************************!*\
  !*** ./src/routers/accountRouter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\")\r\nconst accountCtr = __webpack_require__(/*! ../controllers/accountController */ \"./src/controllers/accountController.js\")\r\n\r\n// 创建路由模块\r\nconst accountRouter=express.Router()\r\n// 获取登录页面\r\naccountRouter.get(\"/login\",accountCtr.getLoginPage)\r\n// 处理登录逻辑\r\naccountRouter.post(\"/login\",accountCtr.handleLogin)\r\n// 获取图片验证码\r\naccountRouter.get(\"/vcode\",accountCtr.getVcode)\r\n// 获取注册页面\r\naccountRouter.get(\"/register\",accountCtr.getRegisterPage)\r\n// 处理注册逻辑\r\naccountRouter.post(\"/register\",accountCtr.handleRegister)\r\n// 处理注册逻辑\r\naccountRouter.get(\"/layout\",accountCtr.layout)\r\n\r\nmodule.exports=accountRouter\n\n//# sourceURL=webpack:///./src/routers/accountRouter.js?");

/***/ }),

/***/ "./src/routers/manageRouter.js":
/*!*************************************!*\
  !*** ./src/routers/manageRouter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\")\r\n\r\nconst manageCtr=__webpack_require__(/*! ../controllers/manageController */ \"./src/controllers/manageController.js\")\r\n\r\n// 获取路由模块\r\nconst manageRouter=express.Router()\r\n// 查\r\nmanageRouter.get(\"/list\",manageCtr.getStudentListPage)\r\n// 获取添加页面\r\nmanageRouter.get(\"/add\",manageCtr.getAddStudentPage)\r\n// 增\r\nmanageRouter.post(\"/add\",manageCtr.addStudentInfo)\r\n// 获取编辑页面\r\nmanageRouter.get(\"/edit/:id\",manageCtr.getEditStudentPage)\r\n// 改\r\nmanageRouter.post(\"/edit/:id\",manageCtr.editStudentInfo)\r\n// 删\r\nmanageRouter.post(\"/delete/:id\",manageCtr.deleteStudentInfo)\r\n\r\n\r\nmodule.exports=manageRouter\n\n//# sourceURL=webpack:///./src/routers/manageRouter.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "captchapng":
/*!*****************************!*\
  !*** external "captchapng" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"captchapng\");\n\n//# sourceURL=webpack:///external_%22captchapng%22?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });