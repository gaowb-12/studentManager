/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst server = express();\r\n__webpack_require__(/*! ejs */ \"ejs\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\n\r\n// 管理静态资源\r\nserver.use(express.static(\"dist/statics\"))\r\n// 处理post请求里的body，req.body能够访问\r\nserver.use(bodyParser.urlencoded())\r\n\r\n// 定义模板引擎\r\nserver.set('views', path.resolve(__dirname, 'dist/views'));\r\nserver.set('view engine','ejs');\r\n\r\nserver.use(\"/\",(req,res,next)=>{\r\n    next()\r\n})\r\n\r\n// 获取用户路由管理模块\r\nconst accountRouter = __webpack_require__(/*! ./src/routers/accountRouter */ \"./src/routers/accountRouter.js\")\r\nserver.use(\"/account\",accountRouter)\r\n\r\n// 获取系统路由管理模块\r\nconst manageRouter = __webpack_require__(/*! ./src/routers/manageRouter */ \"./src/routers/manageRouter.js\")\r\nserver.use(\"/studentmanager\",manageRouter)\r\n\r\n\r\nserver.listen(\"1024\",(err)=>{\r\n    console.log(err)\r\n})\n/* WEBPACK VAR INJECTION */}.call(this, \"\"))\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/controllers/accountController.js":
/*!**********************************************!*\
  !*** ./src/controllers/accountController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\")\r\nconst database=__webpack_require__(/*! ../model/databaseManager */ \"./src/model/databaseManager.js\")\r\n\r\n// 返回登录页面(get)\r\nexports.getLoginPage=(req,res)=>{\r\n    res.render('login', {people: [1,2,3]});\r\n}\r\n// 处理登录页面逻辑(post)\r\nexports.handleLogin=(req,res)=>{\r\n    const result = {status:1,message:\"登录成功\"}\r\n    database.findOne(\"account\",{username:req.body.username,password:req.body.password},(err,docs)=>{\r\n        if(!docs){\r\n            result.status=0;\r\n            result.message=\"账户或密码错误！\"\r\n        }\r\n        res.json(result);\r\n    })\r\n}\r\n\r\n// 返回注册页面(get)\r\nexports.getRegisterPage=(req,res)=>{\r\n    res.render('register', {people: [1,2,3]});\r\n}\r\n// 处理注册页面逻辑(post)\r\nexports.handleRegister=(req,res)=>{\r\n    const result = {status:1,message:\"注册成功\"}\r\n    database.findOne(\"account\",{username:req.body.username},(err,docs)=>{\r\n        if(!docs){\r\n            database.insertOne(\"account\",{username:req.body.username,password:req.body.username},(err,docs)=>{\r\n                if(err)\r\n                    console.log(err)\r\n            })\r\n        }else{\r\n            result.status=0;\r\n            result.message=\"账户已注册！\"\r\n        }\r\n        res.json(result);\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/controllers/accountController.js?");

/***/ }),

/***/ "./src/controllers/manageController.js":
/*!*********************************************!*\
  !*** ./src/controllers/manageController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\")\r\nconst database=__webpack_require__(/*! ../model/databaseManager */ \"./src/model/databaseManager.js\")\r\n\r\n// 获取学生列表\r\nexports.getStudentListPage=(req,res)=>{\r\n    // 获取当前页\r\n    const currentPageIndex=parseInt(req.query.currentPageIndex)||0;\r\n    // 每页的数据条数\r\n    const everyPageCount=parseInt(req.query.everyPageCount)||4;\r\n    // 获取搜索关键字\r\n    const keyword=req.query.keyword||\"\";\r\n\r\n    // 获取总条数\r\n    database.getCount(\"studentInfos\",{name:{$regex:keyword}},(err,count)=>{\r\n        // 跳过多少条数据\r\n        const skipCount=currentPageIndex*everyPageCount;\r\n        // 计算有多少页\r\n        const totalPage=count%everyPageCount>0?parseInt(count/everyPageCount)+1:count/everyPageCount\r\n        // 页数变成数组\r\n        const totalPageArray=[];\r\n        for(var i =0;i<totalPage;i++){\r\n            totalPageArray.push(i);\r\n          }\r\n          \r\n        // 返回当前页的结果\r\n        database.find(\"studentInfos\",{name:{$regex:keyword}},skipCount,everyPageCount,(err,docs)=>{\r\n            if(err){\r\n                console.log(err)\r\n            }\r\n            res.render('parent', {keyword,totalPage,totalPageArray,currentPageIndex,list: docs});\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/controllers/manageController.js?");

/***/ }),

/***/ "./src/model/databaseManager.js":
/*!**************************************!*\
  !*** ./src/model/databaseManager.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongodb = __webpack_require__(/*! mongodb */ \"mongodb\");\r\nconst mongoClient = mongodb.MongoClient;\r\n\r\nconst url=\"mongodb://localhost:27017\";//数据库地址\r\n\r\n// 封装获取db对象\r\nfunction getDB(callback){\r\n    mongoClient.connect(url, (err, client)=>{\r\n        if (err) {\r\n          console.log(err)\r\n        }\r\n        callback(err,client);\r\n    });\r\n}\r\n// 查询一条数据\r\nexports.findOne=(collectionName,collectionCondition,callback)=>{\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        // 查询\r\n        collection.findOne(collectionCondition,(err, doc)=>{\r\n            callback(err,doc)\r\n            client.close()\r\n        });\r\n    })\r\n}\r\n\r\n// 查询多条数据\r\nexports.find=(collectionName,collectionCondition,skipCount,limitCount,callback)=>{\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        // 查询\r\n        collection.find(collectionCondition).skip(skipCount).limit(limitCount).toArray((err, arrayDocs)=>{\r\n            callback(err,arrayDocs)\r\n            client.close()\r\n        });\r\n    })\r\n}\r\n//查询符合条件的总个数\r\nexports.getCount = (collectionName,collectionCondition,callback)=>{\r\n    //1.获取到db对象\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        collection.find(collectionCondition).count((err,count)=>{\r\n             if (err) {\r\n              console.log(err)\r\n             }\r\n             callback(err,count)\r\n             client.close();\r\n        })\r\n    })\r\n}\r\n// 插入一条数据\r\nexports.insertOne=(collectionName,collectionCondition,callback)=>{\r\n    getDB((err,client)=>{\r\n        const db=client.db(\"students\");\r\n        const collection = db.collection(collectionName);//获取集合\r\n        // 查询\r\n        collection.insertOne(collectionCondition,(err, doc)=>{\r\n            callback(err,doc)\r\n            client.close()\r\n        });\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/model/databaseManager.js?");

/***/ }),

/***/ "./src/routers/accountRouter.js":
/*!**************************************!*\
  !*** ./src/routers/accountRouter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\")\r\nconst accountCtr = __webpack_require__(/*! ../controllers/accountController */ \"./src/controllers/accountController.js\")\r\n\r\n// 创建路由模块\r\nconst accountRouter=express.Router()\r\n// 获取登录页面\r\naccountRouter.get(\"/login\",accountCtr.getLoginPage)\r\n// 登录\r\naccountRouter.post(\"/login\",accountCtr.handleLogin)\r\n// 注册\r\naccountRouter.get(\"/register\",accountCtr.getRegisterPage)\r\n// 注册\r\naccountRouter.post(\"/register\",accountCtr.handleRegister)\r\n\r\nmodule.exports=accountRouter\n\n//# sourceURL=webpack:///./src/routers/accountRouter.js?");

/***/ }),

/***/ "./src/routers/manageRouter.js":
/*!*************************************!*\
  !*** ./src/routers/manageRouter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\")\r\n\r\nconst manageCtr=__webpack_require__(/*! ../controllers/manageController */ \"./src/controllers/manageController.js\")\r\n\r\n// 获取路由模块\r\nconst manageRouter=express.Router()\r\nmanageRouter.get(\"/list\",manageCtr.getStudentListPage)\r\n\r\nmodule.exports=manageRouter\n\n//# sourceURL=webpack:///./src/routers/manageRouter.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

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