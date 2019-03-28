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

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst server = express();\r\n__webpack_require__(/*! ejs */ \"ejs\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nconst session = __webpack_require__(/*! express-session */ \"./node_modules/_express-session@1.15.6@express-session/index.js\");\r\n\r\n// 管理静态资源\r\nserver.use(express.static(\"dist/statics\"))\r\n// 处理post请求里的body，req.body能够访问\r\nserver.use(bodyParser.urlencoded())\r\n\r\n// 管理session cookie\r\nserver.use(session({ secret: 'keyboard cat', cookie: { maxAge: 100000 }}))\r\n\r\n// 定义模板引擎\r\nserver.set('views', path.resolve(__dirname, 'dist/views'));\r\nserver.set('view engine','ejs');\r\n\r\nserver.use(\"/\",(req,res,next)=>{\r\n    if(req.url.includes(\"/account/login\")||req.url.includes(\"/account/register\")||req.url.includes(\"/account/vcode\")||req.url.includes(\"/favicon\")){\r\n        next()\r\n    }else{\r\n        if(req.session.username){\r\n            next()\r\n        }else{\r\n            res.setHeader(\"Content-Type\",\"text/html;charset=utf8\")\r\n            res.end(\"<script>alert('您还没有登录,请先登录!');window.location.href='/account/login'</script>\");\r\n        }\r\n    }\r\n})\r\n\r\n// 获取用户路由管理模块\r\nconst accountRouter = __webpack_require__(/*! ./src/routers/accountRouter */ \"./src/routers/accountRouter.js\")\r\nserver.use(\"/account\",accountRouter)\r\n\r\n// 获取系统路由管理模块\r\nconst manageRouter = __webpack_require__(/*! ./src/routers/manageRouter */ \"./src/routers/manageRouter.js\")\r\nserver.use(\"/studentmanager\",manageRouter)\r\n\r\n\r\nserver.listen(\"1024\",(err)=>{\r\n    console.log(err)\r\n})\n/* WEBPACK VAR INJECTION */}.call(this, \"\"))\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/_captchapng@0.0.1@captchapng/lib/captchapng.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_captchapng@0.0.1@captchapng/lib/captchapng.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\r\n * captchapng\r\n * Captcha PNG generator\r\n * @Author: George Chan\r\n * @Email: gchan@21cn.com\r\n * @Version: 0.0.1\r\n * @Date: 2013-08-18\r\n * @license http://www.opensource.org/licenses/bsd-license.php BSD License\r\n */\r\n\r\nvar pnglib = __webpack_require__(/*! pnglib */ \"./node_modules/_pnglib@0.0.1@pnglib/lib/pnglib.js\");\r\nthis.numMask = [];\r\nthis.numMask[0]=[];\r\nthis.numMask[0]=loadNumMask0();\r\nthis.numMask[1]=loadNumMask1();\r\nmyself = this;\r\n\r\nfunction loadNumMask0() {\r\n    var numbmp=[];\r\n    numbmp[0]=[\"0011111000\",\"0111111110\",\"0111111110\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"0111111111\",\" 111111110\",\"0011111100\"];\r\n    numbmp[1]=[\"0000011\",\"0000111\",\"0011111\",\"1111111\",\"1111111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\"];\r\n    numbmp[2]=[\"001111100\",\"011111110\",\"111111111\",\"111001111\",\"111001111\",\"111001111\",\"111001111\",\"000011111\",\"000011110\",\"000111110\",\"000111100\",\"000111100\",\"001111000\",\"001111000\",\"011110000\",\"011110000\",\"111111111\",\"111111111\",\"111111111\"];\r\n    numbmp[3]=[\"0011111100\",\"0111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"1111001111\",\"0000001111\",\"0001111110\",\"0001111100\",\"0001111111\",\"0000001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111111111\",\"0111111110\",\"0011111100\"];\r\n    numbmp[4]=[\"00001111110\",\"00001111110\",\"00011111110\",\"00011111110\",\"00011111110\",\"00111011110\",\"00111011110\",\"00111011110\",\"01110011110\",\"01110011110\",\"01110011110\",\"11100011110\",\"11111111111\",\"11111111111\",\"11111111111\",\"11111111111\",\"00000011110\",\"00000011110\",\"00000011110\"];\r\n    numbmp[5]=[\"1111111111\",\"1111111111\",\"1111111111\",\"1111000000\",\"1111000000\",\"1111011100\",\"1111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"0000001111\",\"0000001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111111111\",\"0111111110\",\"0011111100\"];\r\n    numbmp[6]=[\"0011111100\",\"0111111110\",\"0111111111\",\"1111001111\",\"1111001111\",\"1111000000\",\"1111011100\",\"1111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"0111111111\",\"0111111110\",\"0011111100\"];\r\n    numbmp[7]=[\"11111111\",\"11111111\",\"11111111\",\"00001111\",\"00001111\",\"00001111\",\"00001110\",\"00001110\",\"00011110\",\"00011110\",\"00011110\",\"00011100\",\"00111100\",\"00111100\",\"00111100\",\"00111100\",\"00111000\",\"01111000\",\"01111000\"];\r\n    numbmp[8]=[\"0011111100\",\"0111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"0111111110\",\"0011111100\",\"0111111110\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111111111\",\"0111111110\",\"0011111100\"];\r\n    numbmp[9]=[\"0011111100\",\"0111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111111111\",\"0111111111\",\"0011101111\",\"0000001111\",\"1111001111\",\"1111001111\",\"1111111110\",\"0111111110\",\"0011111000\"];\r\n\r\n    return numbmp;\r\n}\r\n\r\nfunction loadNumMask1() {\r\n    var numbmp=[];\r\n    numbmp[0] = [\"000000001111000\",\"000000111111110\",\"000001110000110\",\"000011000000011\",\"000110000000011\",\"001100000000011\",\"011100000000011\",\"011000000000011\",\"111000000000110\",\"110000000000110\",\"110000000001110\",\"110000000001100\",\"110000000011000\",\"110000000111000\",\"011000011110000\",\"011111111000000\",\"000111110000000\"];\r\n    numbmp[1] = [\"00000111\",\"00001111\",\"00011110\",\"00010110\",\"00001100\",\"00001100\",\"00011000\",\"00011000\",\"00110000\",\"00110000\",\"00110000\",\"01100000\",\"01100000\",\"01100000\",\"11000000\",\"11000000\",\"11000000\"];\r\n    numbmp[2] = [\"00000011111000\",\"00001111111110\",\"00011100000110\",\"00011000000011\",\"00000000000011\",\"00000000000011\",\"00000000000011\",\"00000000000110\",\"00000000001110\",\"00000000011100\",\"00000001110000\",\"00000111100000\",\"00001110000000\",\"00111100000000\",\"01110000000000\",\"11111111110000\",\"11111111111110\",\"00000000011110\"];\r\n    numbmp[3] = [\"000000111111000\",\"000011111111110\",\"000111100000111\",\"000110000000011\",\"000000000000011\",\"000000000000011\",\"000000000001110\",\"000000111111000\",\"000000111111000\",\"000000000011100\",\"000000000001100\",\"000000000001100\",\"110000000001100\",\"111000000011100\",\"111100000111000\",\"001111111110000\",\"000111111000000\"];\r\n    numbmp[4] = [\"00000011000001\",\"00000110000011\",\"00001100000010\",\"00011000000110\",\"00111000000110\",\"00110000001100\",\"01100000001100\",\"01100000001000\",\"11000000011000\",\"11111111111111\",\"11111111111111\",\"00000000110000\",\"00000000110000\",\"00000000100000\",\"00000001100000\",\"00000001100000\",\"00000001100000\"];\r\n    numbmp[5] = [\"0000001111111111\",\"0000011111111111\",\"0000111000000000\",\"0000110000000000\",\"0000110000000000\",\"0001110000000000\",\"0001101111100000\",\"0001111111111000\",\"0001110000011000\",\"0000000000001100\",\"0000000000001100\",\"0000000000001100\",\"1100000000001100\",\"1110000000011000\",\"1111000001111000\",\"0111111111100000\",\"0001111110000000\"];\r\n    numbmp[6] = [\"000000001111100\",\"000000111111110\",\"000011110000111\",\"000111000000011\",\"000110000000000\",\"001100000000000\",\"011001111100000\",\"011111111111000\",\"111110000011000\",\"111000000001100\",\"110000000001100\",\"110000000001100\",\"110000000001100\",\"111000000011000\",\"011100001110000\",\"001111111100000\",\"000111110000000\"];\r\n    numbmp[7] = [\"1111111111111\",\"1111111111111\",\"0000000001110\",\"0000000011100\",\"0000000111000\",\"0000000110000\",\"0000001100000\",\"0000011100000\",\"0000111000000\",\"0000110000000\",\"0001100000000\",\"0011100000000\",\"0011000000000\",\"0111000000000\",\"1110000000000\",\"1100000000000\",\"1100000000000\"];\r\n    numbmp[8] = [\"0000000111110000\",\"0000011111111100\",\"0000011000001110\",\"0000110000000111\",\"0000110000011111\",\"0000110001111000\",\"0000011111100000\",\"0000011110000000\",\"0001111111000000\",\"0011100011100000\",\"0111000001110000\",\"1110000000110000\",\"1100000000110000\",\"1100000001110000\",\"1110000011100000\",\"0111111111000000\",\"0001111100000000\"];\r\n    numbmp[9] = [\"0000011111000\",\"0001111111110\",\"0011100000110\",\"0011000000011\",\"0110000000011\",\"0110000000011\",\"0110000000011\",\"0110000000111\",\"0011000011110\",\"0011111111110\",\"0000111100110\",\"0000000001100\",\"0000000011000\",\"0000000111000\",\"0000011110000\",\"1111111000000\",\"1111110000000\"];\r\n    return numbmp;\r\n}\r\n\r\n\r\nfunction captchapng(width,height,dispNumber) {\r\n    this.width   = width;\r\n    this.height  = height;\r\n    this.depth   = 8;\r\n    this.dispNumber = \"\"+dispNumber.toString();\r\n    this.widthAverage = parseInt(this.width/this.dispNumber.length);\r\n\r\n    var p = new pnglib(this.width,this.height,this.depth);\r\n\r\n    for (var numSection=0;numSection<this.dispNumber.length;numSection++){\r\n\r\n        var dispNum = this.dispNumber[numSection].valueOf();\r\n\r\n        var font = parseInt(Math.random()*myself.numMask.length);\r\n        font = (font>=myself.numMask.length?0:font);\r\n        //var random_x_offs = 0, random_y_offs = 0;\r\n        var random_x_offs = parseInt(Math.random()*(this.widthAverage - myself.numMask[font][dispNum][0].length));\r\n        var random_y_offs = parseInt(Math.random()*(this.height - myself.numMask[font][dispNum].length));\r\n        random_x_offs = (random_x_offs<0?0:random_x_offs);\r\n        random_y_offs = (random_y_offs<0?0:random_y_offs);\r\n\r\n        for (var i=0;(i<myself.numMask[font][dispNum].length) && ((i+random_y_offs)<this.height);i++){\r\n            var lineIndex = p.index(this.widthAverage * numSection + random_x_offs,i+random_y_offs);\r\n            for (var j=0;j<myself.numMask[font][dispNum][i].length;j++){\r\n                if ((myself.numMask[font][dispNum][i][j]=='1') && (this.widthAverage * numSection + random_x_offs+j)<this.width){\r\n                    p.buffer[lineIndex+j]='\\x01';\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return p;\r\n}\r\n\r\nmodule.exports = captchapng;\r\n\n\n//# sourceURL=webpack:///./node_modules/_captchapng@0.0.1@captchapng/lib/captchapng.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc1.js":
/*!*************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc1.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _define_crc2.default)('crc1', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = ~~previous;\n  var accum = 0;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    accum += byte;\n  }\n\n  crc += accum % 256;\n  return crc % 256;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc1.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc16.js":
/*!**************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc16.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Generated by `./pycrc.py --algorithm=table-driven --model=crc-16 --generate=c`\nvar TABLE = [0x0000, 0xc0c1, 0xc181, 0x0140, 0xc301, 0x03c0, 0x0280, 0xc241, 0xc601, 0x06c0, 0x0780, 0xc741, 0x0500, 0xc5c1, 0xc481, 0x0440, 0xcc01, 0x0cc0, 0x0d80, 0xcd41, 0x0f00, 0xcfc1, 0xce81, 0x0e40, 0x0a00, 0xcac1, 0xcb81, 0x0b40, 0xc901, 0x09c0, 0x0880, 0xc841, 0xd801, 0x18c0, 0x1980, 0xd941, 0x1b00, 0xdbc1, 0xda81, 0x1a40, 0x1e00, 0xdec1, 0xdf81, 0x1f40, 0xdd01, 0x1dc0, 0x1c80, 0xdc41, 0x1400, 0xd4c1, 0xd581, 0x1540, 0xd701, 0x17c0, 0x1680, 0xd641, 0xd201, 0x12c0, 0x1380, 0xd341, 0x1100, 0xd1c1, 0xd081, 0x1040, 0xf001, 0x30c0, 0x3180, 0xf141, 0x3300, 0xf3c1, 0xf281, 0x3240, 0x3600, 0xf6c1, 0xf781, 0x3740, 0xf501, 0x35c0, 0x3480, 0xf441, 0x3c00, 0xfcc1, 0xfd81, 0x3d40, 0xff01, 0x3fc0, 0x3e80, 0xfe41, 0xfa01, 0x3ac0, 0x3b80, 0xfb41, 0x3900, 0xf9c1, 0xf881, 0x3840, 0x2800, 0xe8c1, 0xe981, 0x2940, 0xeb01, 0x2bc0, 0x2a80, 0xea41, 0xee01, 0x2ec0, 0x2f80, 0xef41, 0x2d00, 0xedc1, 0xec81, 0x2c40, 0xe401, 0x24c0, 0x2580, 0xe541, 0x2700, 0xe7c1, 0xe681, 0x2640, 0x2200, 0xe2c1, 0xe381, 0x2340, 0xe101, 0x21c0, 0x2080, 0xe041, 0xa001, 0x60c0, 0x6180, 0xa141, 0x6300, 0xa3c1, 0xa281, 0x6240, 0x6600, 0xa6c1, 0xa781, 0x6740, 0xa501, 0x65c0, 0x6480, 0xa441, 0x6c00, 0xacc1, 0xad81, 0x6d40, 0xaf01, 0x6fc0, 0x6e80, 0xae41, 0xaa01, 0x6ac0, 0x6b80, 0xab41, 0x6900, 0xa9c1, 0xa881, 0x6840, 0x7800, 0xb8c1, 0xb981, 0x7940, 0xbb01, 0x7bc0, 0x7a80, 0xba41, 0xbe01, 0x7ec0, 0x7f80, 0xbf41, 0x7d00, 0xbdc1, 0xbc81, 0x7c40, 0xb401, 0x74c0, 0x7580, 0xb541, 0x7700, 0xb7c1, 0xb681, 0x7640, 0x7200, 0xb2c1, 0xb381, 0x7340, 0xb101, 0x71c0, 0x7080, 0xb041, 0x5000, 0x90c1, 0x9181, 0x5140, 0x9301, 0x53c0, 0x5280, 0x9241, 0x9601, 0x56c0, 0x5780, 0x9741, 0x5500, 0x95c1, 0x9481, 0x5440, 0x9c01, 0x5cc0, 0x5d80, 0x9d41, 0x5f00, 0x9fc1, 0x9e81, 0x5e40, 0x5a00, 0x9ac1, 0x9b81, 0x5b40, 0x9901, 0x59c0, 0x5880, 0x9841, 0x8801, 0x48c0, 0x4980, 0x8941, 0x4b00, 0x8bc1, 0x8a81, 0x4a40, 0x4e00, 0x8ec1, 0x8f81, 0x4f40, 0x8d01, 0x4dc0, 0x4c80, 0x8c41, 0x4400, 0x84c1, 0x8581, 0x4540, 0x8701, 0x47c0, 0x4680, 0x8641, 0x8201, 0x42c0, 0x4380, 0x8341, 0x4100, 0x81c1, 0x8081, 0x4040];\n\nif (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);\n\nmodule.exports = (0, _define_crc2.default)('crc-16', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = ~~previous;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    crc = (TABLE[(crc ^ byte) & 0xff] ^ crc >> 8) & 0xffff;\n  }\n\n  return crc;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc16.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc16_ccitt.js":
/*!********************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc16_ccitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Generated by `./pycrc.py --algorithm=table-driven --model=ccitt --generate=c`\nvar TABLE = [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6, 0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d, 0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823, 0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a, 0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70, 0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067, 0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d, 0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634, 0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a, 0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1, 0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0];\n\nif (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);\n\nmodule.exports = (0, _define_crc2.default)('ccitt', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = typeof previous !== 'undefined' ? ~~previous : 0xffff;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    crc = (TABLE[(crc >> 8 ^ byte) & 0xff] ^ crc << 8) & 0xffff;\n  }\n\n  return crc;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc16_ccitt.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc16_kermit.js":
/*!*********************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc16_kermit.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Generated by `./pycrc.py --algorithm=table-driven --model=kermit --generate=c`\nvar TABLE = [0x0000, 0x1189, 0x2312, 0x329b, 0x4624, 0x57ad, 0x6536, 0x74bf, 0x8c48, 0x9dc1, 0xaf5a, 0xbed3, 0xca6c, 0xdbe5, 0xe97e, 0xf8f7, 0x1081, 0x0108, 0x3393, 0x221a, 0x56a5, 0x472c, 0x75b7, 0x643e, 0x9cc9, 0x8d40, 0xbfdb, 0xae52, 0xdaed, 0xcb64, 0xf9ff, 0xe876, 0x2102, 0x308b, 0x0210, 0x1399, 0x6726, 0x76af, 0x4434, 0x55bd, 0xad4a, 0xbcc3, 0x8e58, 0x9fd1, 0xeb6e, 0xfae7, 0xc87c, 0xd9f5, 0x3183, 0x200a, 0x1291, 0x0318, 0x77a7, 0x662e, 0x54b5, 0x453c, 0xbdcb, 0xac42, 0x9ed9, 0x8f50, 0xfbef, 0xea66, 0xd8fd, 0xc974, 0x4204, 0x538d, 0x6116, 0x709f, 0x0420, 0x15a9, 0x2732, 0x36bb, 0xce4c, 0xdfc5, 0xed5e, 0xfcd7, 0x8868, 0x99e1, 0xab7a, 0xbaf3, 0x5285, 0x430c, 0x7197, 0x601e, 0x14a1, 0x0528, 0x37b3, 0x263a, 0xdecd, 0xcf44, 0xfddf, 0xec56, 0x98e9, 0x8960, 0xbbfb, 0xaa72, 0x6306, 0x728f, 0x4014, 0x519d, 0x2522, 0x34ab, 0x0630, 0x17b9, 0xef4e, 0xfec7, 0xcc5c, 0xddd5, 0xa96a, 0xb8e3, 0x8a78, 0x9bf1, 0x7387, 0x620e, 0x5095, 0x411c, 0x35a3, 0x242a, 0x16b1, 0x0738, 0xffcf, 0xee46, 0xdcdd, 0xcd54, 0xb9eb, 0xa862, 0x9af9, 0x8b70, 0x8408, 0x9581, 0xa71a, 0xb693, 0xc22c, 0xd3a5, 0xe13e, 0xf0b7, 0x0840, 0x19c9, 0x2b52, 0x3adb, 0x4e64, 0x5fed, 0x6d76, 0x7cff, 0x9489, 0x8500, 0xb79b, 0xa612, 0xd2ad, 0xc324, 0xf1bf, 0xe036, 0x18c1, 0x0948, 0x3bd3, 0x2a5a, 0x5ee5, 0x4f6c, 0x7df7, 0x6c7e, 0xa50a, 0xb483, 0x8618, 0x9791, 0xe32e, 0xf2a7, 0xc03c, 0xd1b5, 0x2942, 0x38cb, 0x0a50, 0x1bd9, 0x6f66, 0x7eef, 0x4c74, 0x5dfd, 0xb58b, 0xa402, 0x9699, 0x8710, 0xf3af, 0xe226, 0xd0bd, 0xc134, 0x39c3, 0x284a, 0x1ad1, 0x0b58, 0x7fe7, 0x6e6e, 0x5cf5, 0x4d7c, 0xc60c, 0xd785, 0xe51e, 0xf497, 0x8028, 0x91a1, 0xa33a, 0xb2b3, 0x4a44, 0x5bcd, 0x6956, 0x78df, 0x0c60, 0x1de9, 0x2f72, 0x3efb, 0xd68d, 0xc704, 0xf59f, 0xe416, 0x90a9, 0x8120, 0xb3bb, 0xa232, 0x5ac5, 0x4b4c, 0x79d7, 0x685e, 0x1ce1, 0x0d68, 0x3ff3, 0x2e7a, 0xe70e, 0xf687, 0xc41c, 0xd595, 0xa12a, 0xb0a3, 0x8238, 0x93b1, 0x6b46, 0x7acf, 0x4854, 0x59dd, 0x2d62, 0x3ceb, 0x0e70, 0x1ff9, 0xf78f, 0xe606, 0xd49d, 0xc514, 0xb1ab, 0xa022, 0x92b9, 0x8330, 0x7bc7, 0x6a4e, 0x58d5, 0x495c, 0x3de3, 0x2c6a, 0x1ef1, 0x0f78];\n\nif (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);\n\nmodule.exports = (0, _define_crc2.default)('kermit', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = typeof previous !== 'undefined' ? ~~previous : 0x0000;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    crc = (TABLE[(crc ^ byte) & 0xff] ^ crc >> 8) & 0xffff;\n  }\n\n  return crc;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc16_kermit.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc16_modbus.js":
/*!*********************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc16_modbus.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Generated by `./pycrc.py --algorithm=table-driven --model=crc-16-modbus --generate=c`\nvar TABLE = [0x0000, 0xc0c1, 0xc181, 0x0140, 0xc301, 0x03c0, 0x0280, 0xc241, 0xc601, 0x06c0, 0x0780, 0xc741, 0x0500, 0xc5c1, 0xc481, 0x0440, 0xcc01, 0x0cc0, 0x0d80, 0xcd41, 0x0f00, 0xcfc1, 0xce81, 0x0e40, 0x0a00, 0xcac1, 0xcb81, 0x0b40, 0xc901, 0x09c0, 0x0880, 0xc841, 0xd801, 0x18c0, 0x1980, 0xd941, 0x1b00, 0xdbc1, 0xda81, 0x1a40, 0x1e00, 0xdec1, 0xdf81, 0x1f40, 0xdd01, 0x1dc0, 0x1c80, 0xdc41, 0x1400, 0xd4c1, 0xd581, 0x1540, 0xd701, 0x17c0, 0x1680, 0xd641, 0xd201, 0x12c0, 0x1380, 0xd341, 0x1100, 0xd1c1, 0xd081, 0x1040, 0xf001, 0x30c0, 0x3180, 0xf141, 0x3300, 0xf3c1, 0xf281, 0x3240, 0x3600, 0xf6c1, 0xf781, 0x3740, 0xf501, 0x35c0, 0x3480, 0xf441, 0x3c00, 0xfcc1, 0xfd81, 0x3d40, 0xff01, 0x3fc0, 0x3e80, 0xfe41, 0xfa01, 0x3ac0, 0x3b80, 0xfb41, 0x3900, 0xf9c1, 0xf881, 0x3840, 0x2800, 0xe8c1, 0xe981, 0x2940, 0xeb01, 0x2bc0, 0x2a80, 0xea41, 0xee01, 0x2ec0, 0x2f80, 0xef41, 0x2d00, 0xedc1, 0xec81, 0x2c40, 0xe401, 0x24c0, 0x2580, 0xe541, 0x2700, 0xe7c1, 0xe681, 0x2640, 0x2200, 0xe2c1, 0xe381, 0x2340, 0xe101, 0x21c0, 0x2080, 0xe041, 0xa001, 0x60c0, 0x6180, 0xa141, 0x6300, 0xa3c1, 0xa281, 0x6240, 0x6600, 0xa6c1, 0xa781, 0x6740, 0xa501, 0x65c0, 0x6480, 0xa441, 0x6c00, 0xacc1, 0xad81, 0x6d40, 0xaf01, 0x6fc0, 0x6e80, 0xae41, 0xaa01, 0x6ac0, 0x6b80, 0xab41, 0x6900, 0xa9c1, 0xa881, 0x6840, 0x7800, 0xb8c1, 0xb981, 0x7940, 0xbb01, 0x7bc0, 0x7a80, 0xba41, 0xbe01, 0x7ec0, 0x7f80, 0xbf41, 0x7d00, 0xbdc1, 0xbc81, 0x7c40, 0xb401, 0x74c0, 0x7580, 0xb541, 0x7700, 0xb7c1, 0xb681, 0x7640, 0x7200, 0xb2c1, 0xb381, 0x7340, 0xb101, 0x71c0, 0x7080, 0xb041, 0x5000, 0x90c1, 0x9181, 0x5140, 0x9301, 0x53c0, 0x5280, 0x9241, 0x9601, 0x56c0, 0x5780, 0x9741, 0x5500, 0x95c1, 0x9481, 0x5440, 0x9c01, 0x5cc0, 0x5d80, 0x9d41, 0x5f00, 0x9fc1, 0x9e81, 0x5e40, 0x5a00, 0x9ac1, 0x9b81, 0x5b40, 0x9901, 0x59c0, 0x5880, 0x9841, 0x8801, 0x48c0, 0x4980, 0x8941, 0x4b00, 0x8bc1, 0x8a81, 0x4a40, 0x4e00, 0x8ec1, 0x8f81, 0x4f40, 0x8d01, 0x4dc0, 0x4c80, 0x8c41, 0x4400, 0x84c1, 0x8581, 0x4540, 0x8701, 0x47c0, 0x4680, 0x8641, 0x8201, 0x42c0, 0x4380, 0x8341, 0x4100, 0x81c1, 0x8081, 0x4040];\n\nif (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);\n\nmodule.exports = (0, _define_crc2.default)('crc-16-modbus', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = typeof previous !== 'undefined' ? ~~previous : 0xffff;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    crc = (TABLE[(crc ^ byte) & 0xff] ^ crc >> 8) & 0xffff;\n  }\n\n  return crc;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc16_modbus.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc16_xmodem.js":
/*!*********************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc16_xmodem.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _define_crc2.default)('xmodem', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = typeof previous !== 'undefined' ? ~~previous : 0x0;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    var code = crc >>> 8 & 0xFF;\n\n    code ^= byte & 0xFF;\n    code ^= code >>> 4;\n    crc = crc << 8 & 0xFFFF;\n    crc ^= code;\n    code = code << 5 & 0xFFFF;\n    crc ^= code;\n    code = code << 7 & 0xFFFF;\n    crc ^= code;\n  }\n\n  return crc;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc16_xmodem.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc24.js":
/*!**************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc24.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Generated by `./pycrc.py --algorithm=table-drive --model=crc-24 --generate=c`\nvar TABLE = [0x000000, 0x864cfb, 0x8ad50d, 0x0c99f6, 0x93e6e1, 0x15aa1a, 0x1933ec, 0x9f7f17, 0xa18139, 0x27cdc2, 0x2b5434, 0xad18cf, 0x3267d8, 0xb42b23, 0xb8b2d5, 0x3efe2e, 0xc54e89, 0x430272, 0x4f9b84, 0xc9d77f, 0x56a868, 0xd0e493, 0xdc7d65, 0x5a319e, 0x64cfb0, 0xe2834b, 0xee1abd, 0x685646, 0xf72951, 0x7165aa, 0x7dfc5c, 0xfbb0a7, 0x0cd1e9, 0x8a9d12, 0x8604e4, 0x00481f, 0x9f3708, 0x197bf3, 0x15e205, 0x93aefe, 0xad50d0, 0x2b1c2b, 0x2785dd, 0xa1c926, 0x3eb631, 0xb8faca, 0xb4633c, 0x322fc7, 0xc99f60, 0x4fd39b, 0x434a6d, 0xc50696, 0x5a7981, 0xdc357a, 0xd0ac8c, 0x56e077, 0x681e59, 0xee52a2, 0xe2cb54, 0x6487af, 0xfbf8b8, 0x7db443, 0x712db5, 0xf7614e, 0x19a3d2, 0x9fef29, 0x9376df, 0x153a24, 0x8a4533, 0x0c09c8, 0x00903e, 0x86dcc5, 0xb822eb, 0x3e6e10, 0x32f7e6, 0xb4bb1d, 0x2bc40a, 0xad88f1, 0xa11107, 0x275dfc, 0xdced5b, 0x5aa1a0, 0x563856, 0xd074ad, 0x4f0bba, 0xc94741, 0xc5deb7, 0x43924c, 0x7d6c62, 0xfb2099, 0xf7b96f, 0x71f594, 0xee8a83, 0x68c678, 0x645f8e, 0xe21375, 0x15723b, 0x933ec0, 0x9fa736, 0x19ebcd, 0x8694da, 0x00d821, 0x0c41d7, 0x8a0d2c, 0xb4f302, 0x32bff9, 0x3e260f, 0xb86af4, 0x2715e3, 0xa15918, 0xadc0ee, 0x2b8c15, 0xd03cb2, 0x567049, 0x5ae9bf, 0xdca544, 0x43da53, 0xc596a8, 0xc90f5e, 0x4f43a5, 0x71bd8b, 0xf7f170, 0xfb6886, 0x7d247d, 0xe25b6a, 0x641791, 0x688e67, 0xeec29c, 0x3347a4, 0xb50b5f, 0xb992a9, 0x3fde52, 0xa0a145, 0x26edbe, 0x2a7448, 0xac38b3, 0x92c69d, 0x148a66, 0x181390, 0x9e5f6b, 0x01207c, 0x876c87, 0x8bf571, 0x0db98a, 0xf6092d, 0x7045d6, 0x7cdc20, 0xfa90db, 0x65efcc, 0xe3a337, 0xef3ac1, 0x69763a, 0x578814, 0xd1c4ef, 0xdd5d19, 0x5b11e2, 0xc46ef5, 0x42220e, 0x4ebbf8, 0xc8f703, 0x3f964d, 0xb9dab6, 0xb54340, 0x330fbb, 0xac70ac, 0x2a3c57, 0x26a5a1, 0xa0e95a, 0x9e1774, 0x185b8f, 0x14c279, 0x928e82, 0x0df195, 0x8bbd6e, 0x872498, 0x016863, 0xfad8c4, 0x7c943f, 0x700dc9, 0xf64132, 0x693e25, 0xef72de, 0xe3eb28, 0x65a7d3, 0x5b59fd, 0xdd1506, 0xd18cf0, 0x57c00b, 0xc8bf1c, 0x4ef3e7, 0x426a11, 0xc426ea, 0x2ae476, 0xaca88d, 0xa0317b, 0x267d80, 0xb90297, 0x3f4e6c, 0x33d79a, 0xb59b61, 0x8b654f, 0x0d29b4, 0x01b042, 0x87fcb9, 0x1883ae, 0x9ecf55, 0x9256a3, 0x141a58, 0xefaaff, 0x69e604, 0x657ff2, 0xe33309, 0x7c4c1e, 0xfa00e5, 0xf69913, 0x70d5e8, 0x4e2bc6, 0xc8673d, 0xc4fecb, 0x42b230, 0xddcd27, 0x5b81dc, 0x57182a, 0xd154d1, 0x26359f, 0xa07964, 0xace092, 0x2aac69, 0xb5d37e, 0x339f85, 0x3f0673, 0xb94a88, 0x87b4a6, 0x01f85d, 0x0d61ab, 0x8b2d50, 0x145247, 0x921ebc, 0x9e874a, 0x18cbb1, 0xe37b16, 0x6537ed, 0x69ae1b, 0xefe2e0, 0x709df7, 0xf6d10c, 0xfa48fa, 0x7c0401, 0x42fa2f, 0xc4b6d4, 0xc82f22, 0x4e63d9, 0xd11cce, 0x575035, 0x5bc9c3, 0xdd8538];\n\nif (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);\n\nmodule.exports = (0, _define_crc2.default)('crc-24', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = typeof previous !== 'undefined' ? ~~previous : 0xb704ce;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    crc = (TABLE[(crc >> 16 ^ byte) & 0xff] ^ crc << 8) & 0xffffff;\n  }\n\n  return crc;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc24.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc32.js":
/*!**************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc32.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Generated by `./pycrc.py --algorithm=table-driven --model=crc-32 --generate=c`\nvar TABLE = [0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f, 0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615, 0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1, 0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x026d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x05005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d];\n\nif (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);\n\nmodule.exports = (0, _define_crc2.default)('crc-32', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = previous === 0 ? 0 : ~~previous ^ -1;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    crc = TABLE[(crc ^ byte) & 0xff] ^ crc >>> 8;\n  }\n\n  return crc ^ -1;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc32.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc8.js":
/*!*************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc8.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Generated by `./pycrc.py --algorithm=table-driven --model=crc-8 --generate=c`\nvar TABLE = [0x00, 0x07, 0x0e, 0x09, 0x1c, 0x1b, 0x12, 0x15, 0x38, 0x3f, 0x36, 0x31, 0x24, 0x23, 0x2a, 0x2d, 0x70, 0x77, 0x7e, 0x79, 0x6c, 0x6b, 0x62, 0x65, 0x48, 0x4f, 0x46, 0x41, 0x54, 0x53, 0x5a, 0x5d, 0xe0, 0xe7, 0xee, 0xe9, 0xfc, 0xfb, 0xf2, 0xf5, 0xd8, 0xdf, 0xd6, 0xd1, 0xc4, 0xc3, 0xca, 0xcd, 0x90, 0x97, 0x9e, 0x99, 0x8c, 0x8b, 0x82, 0x85, 0xa8, 0xaf, 0xa6, 0xa1, 0xb4, 0xb3, 0xba, 0xbd, 0xc7, 0xc0, 0xc9, 0xce, 0xdb, 0xdc, 0xd5, 0xd2, 0xff, 0xf8, 0xf1, 0xf6, 0xe3, 0xe4, 0xed, 0xea, 0xb7, 0xb0, 0xb9, 0xbe, 0xab, 0xac, 0xa5, 0xa2, 0x8f, 0x88, 0x81, 0x86, 0x93, 0x94, 0x9d, 0x9a, 0x27, 0x20, 0x29, 0x2e, 0x3b, 0x3c, 0x35, 0x32, 0x1f, 0x18, 0x11, 0x16, 0x03, 0x04, 0x0d, 0x0a, 0x57, 0x50, 0x59, 0x5e, 0x4b, 0x4c, 0x45, 0x42, 0x6f, 0x68, 0x61, 0x66, 0x73, 0x74, 0x7d, 0x7a, 0x89, 0x8e, 0x87, 0x80, 0x95, 0x92, 0x9b, 0x9c, 0xb1, 0xb6, 0xbf, 0xb8, 0xad, 0xaa, 0xa3, 0xa4, 0xf9, 0xfe, 0xf7, 0xf0, 0xe5, 0xe2, 0xeb, 0xec, 0xc1, 0xc6, 0xcf, 0xc8, 0xdd, 0xda, 0xd3, 0xd4, 0x69, 0x6e, 0x67, 0x60, 0x75, 0x72, 0x7b, 0x7c, 0x51, 0x56, 0x5f, 0x58, 0x4d, 0x4a, 0x43, 0x44, 0x19, 0x1e, 0x17, 0x10, 0x05, 0x02, 0x0b, 0x0c, 0x21, 0x26, 0x2f, 0x28, 0x3d, 0x3a, 0x33, 0x34, 0x4e, 0x49, 0x40, 0x47, 0x52, 0x55, 0x5c, 0x5b, 0x76, 0x71, 0x78, 0x7f, 0x6a, 0x6d, 0x64, 0x63, 0x3e, 0x39, 0x30, 0x37, 0x22, 0x25, 0x2c, 0x2b, 0x06, 0x01, 0x08, 0x0f, 0x1a, 0x1d, 0x14, 0x13, 0xae, 0xa9, 0xa0, 0xa7, 0xb2, 0xb5, 0xbc, 0xbb, 0x96, 0x91, 0x98, 0x9f, 0x8a, 0x8d, 0x84, 0x83, 0xde, 0xd9, 0xd0, 0xd7, 0xc2, 0xc5, 0xcc, 0xcb, 0xe6, 0xe1, 0xe8, 0xef, 0xfa, 0xfd, 0xf4, 0xf3];\n\nif (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);\n\nmodule.exports = (0, _define_crc2.default)('crc-8', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = ~~previous;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    crc = TABLE[(crc ^ byte) & 0xff] & 0xff;\n  }\n\n  return crc;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc8.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/crc8_1wire.js":
/*!*******************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/crc8_1wire.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar _create_buffer = __webpack_require__(/*! ./create_buffer */ \"./node_modules/_crc@3.4.4@crc/lib/create_buffer.js\");\n\nvar _create_buffer2 = _interopRequireDefault(_create_buffer);\n\nvar _define_crc = __webpack_require__(/*! ./define_crc */ \"./node_modules/_crc@3.4.4@crc/lib/define_crc.js\");\n\nvar _define_crc2 = _interopRequireDefault(_define_crc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Generated by `./pycrc.py --algorithm=table-driven --model=dallas-1-wire --generate=c`\nvar TABLE = [0x00, 0x5e, 0xbc, 0xe2, 0x61, 0x3f, 0xdd, 0x83, 0xc2, 0x9c, 0x7e, 0x20, 0xa3, 0xfd, 0x1f, 0x41, 0x9d, 0xc3, 0x21, 0x7f, 0xfc, 0xa2, 0x40, 0x1e, 0x5f, 0x01, 0xe3, 0xbd, 0x3e, 0x60, 0x82, 0xdc, 0x23, 0x7d, 0x9f, 0xc1, 0x42, 0x1c, 0xfe, 0xa0, 0xe1, 0xbf, 0x5d, 0x03, 0x80, 0xde, 0x3c, 0x62, 0xbe, 0xe0, 0x02, 0x5c, 0xdf, 0x81, 0x63, 0x3d, 0x7c, 0x22, 0xc0, 0x9e, 0x1d, 0x43, 0xa1, 0xff, 0x46, 0x18, 0xfa, 0xa4, 0x27, 0x79, 0x9b, 0xc5, 0x84, 0xda, 0x38, 0x66, 0xe5, 0xbb, 0x59, 0x07, 0xdb, 0x85, 0x67, 0x39, 0xba, 0xe4, 0x06, 0x58, 0x19, 0x47, 0xa5, 0xfb, 0x78, 0x26, 0xc4, 0x9a, 0x65, 0x3b, 0xd9, 0x87, 0x04, 0x5a, 0xb8, 0xe6, 0xa7, 0xf9, 0x1b, 0x45, 0xc6, 0x98, 0x7a, 0x24, 0xf8, 0xa6, 0x44, 0x1a, 0x99, 0xc7, 0x25, 0x7b, 0x3a, 0x64, 0x86, 0xd8, 0x5b, 0x05, 0xe7, 0xb9, 0x8c, 0xd2, 0x30, 0x6e, 0xed, 0xb3, 0x51, 0x0f, 0x4e, 0x10, 0xf2, 0xac, 0x2f, 0x71, 0x93, 0xcd, 0x11, 0x4f, 0xad, 0xf3, 0x70, 0x2e, 0xcc, 0x92, 0xd3, 0x8d, 0x6f, 0x31, 0xb2, 0xec, 0x0e, 0x50, 0xaf, 0xf1, 0x13, 0x4d, 0xce, 0x90, 0x72, 0x2c, 0x6d, 0x33, 0xd1, 0x8f, 0x0c, 0x52, 0xb0, 0xee, 0x32, 0x6c, 0x8e, 0xd0, 0x53, 0x0d, 0xef, 0xb1, 0xf0, 0xae, 0x4c, 0x12, 0x91, 0xcf, 0x2d, 0x73, 0xca, 0x94, 0x76, 0x28, 0xab, 0xf5, 0x17, 0x49, 0x08, 0x56, 0xb4, 0xea, 0x69, 0x37, 0xd5, 0x8b, 0x57, 0x09, 0xeb, 0xb5, 0x36, 0x68, 0x8a, 0xd4, 0x95, 0xcb, 0x29, 0x77, 0xf4, 0xaa, 0x48, 0x16, 0xe9, 0xb7, 0x55, 0x0b, 0x88, 0xd6, 0x34, 0x6a, 0x2b, 0x75, 0x97, 0xc9, 0x4a, 0x14, 0xf6, 0xa8, 0x74, 0x2a, 0xc8, 0x96, 0x15, 0x4b, 0xa9, 0xf7, 0xb6, 0xe8, 0x0a, 0x54, 0xd7, 0x89, 0x6b, 0x35];\n\nif (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);\n\nmodule.exports = (0, _define_crc2.default)('dallas-1-wire', function (buf, previous) {\n  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);\n\n  var crc = ~~previous;\n\n  for (var index = 0; index < buf.length; index++) {\n    var byte = buf[index];\n    crc = TABLE[(crc ^ byte) & 0xff] & 0xff;\n  }\n\n  return crc;\n});\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/crc8_1wire.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/create_buffer.js":
/*!**********************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/create_buffer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nvar createBuffer = _buffer.Buffer.from && _buffer.Buffer.alloc && _buffer.Buffer.allocUnsafe && _buffer.Buffer.allocUnsafeSlow ? _buffer.Buffer.from\n\n// support for Node < 5.10\n: function (val) {\n  return new _buffer.Buffer(val);\n};\n\nexports.default = createBuffer;\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/create_buffer.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/define_crc.js":
/*!*******************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/define_crc.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (model, calc) {\n  var fn = function fn(buf, previous) {\n    return calc(buf, previous) >>> 0;\n  };\n  fn.signed = calc;\n  fn.unsigned = fn;\n  fn.model = model;\n\n  return fn;\n};\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/define_crc.js?");

/***/ }),

/***/ "./node_modules/_crc@3.4.4@crc/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/_crc@3.4.4@crc/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  crc1: __webpack_require__(/*! ./crc1 */ \"./node_modules/_crc@3.4.4@crc/lib/crc1.js\"),\n  crc8: __webpack_require__(/*! ./crc8 */ \"./node_modules/_crc@3.4.4@crc/lib/crc8.js\"),\n  crc81wire: __webpack_require__(/*! ./crc8_1wire */ \"./node_modules/_crc@3.4.4@crc/lib/crc8_1wire.js\"),\n  crc16: __webpack_require__(/*! ./crc16 */ \"./node_modules/_crc@3.4.4@crc/lib/crc16.js\"),\n  crc16ccitt: __webpack_require__(/*! ./crc16_ccitt */ \"./node_modules/_crc@3.4.4@crc/lib/crc16_ccitt.js\"),\n  crc16modbus: __webpack_require__(/*! ./crc16_modbus */ \"./node_modules/_crc@3.4.4@crc/lib/crc16_modbus.js\"),\n  crc16xmodem: __webpack_require__(/*! ./crc16_xmodem */ \"./node_modules/_crc@3.4.4@crc/lib/crc16_xmodem.js\"),\n  crc16kermit: __webpack_require__(/*! ./crc16_kermit */ \"./node_modules/_crc@3.4.4@crc/lib/crc16_kermit.js\"),\n  crc24: __webpack_require__(/*! ./crc24 */ \"./node_modules/_crc@3.4.4@crc/lib/crc24.js\"),\n  crc32: __webpack_require__(/*! ./crc32 */ \"./node_modules/_crc@3.4.4@crc/lib/crc32.js\")\n};\n\n//# sourceURL=webpack:///./node_modules/_crc@3.4.4@crc/lib/index.js?");

/***/ }),

/***/ "./node_modules/_express-session@1.15.6@express-session/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_express-session@1.15.6@express-session/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * express-session\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar cookie = __webpack_require__(/*! cookie */ \"cookie\");\nvar crc = __webpack_require__(/*! crc */ \"./node_modules/_crc@3.4.4@crc/lib/index.js\").crc32;\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-session');\nvar deprecate = __webpack_require__(/*! depd */ \"depd\")('express-session');\nvar parseUrl = __webpack_require__(/*! parseurl */ \"parseurl\");\nvar uid = __webpack_require__(/*! uid-safe */ \"./node_modules/_uid-safe@2.1.5@uid-safe/index.js\").sync\n  , onHeaders = __webpack_require__(/*! on-headers */ \"./node_modules/_on-headers@1.0.2@on-headers/index.js\")\n  , signature = __webpack_require__(/*! cookie-signature */ \"cookie-signature\")\n\nvar Session = __webpack_require__(/*! ./session/session */ \"./node_modules/_express-session@1.15.6@express-session/session/session.js\")\n  , MemoryStore = __webpack_require__(/*! ./session/memory */ \"./node_modules/_express-session@1.15.6@express-session/session/memory.js\")\n  , Cookie = __webpack_require__(/*! ./session/cookie */ \"./node_modules/_express-session@1.15.6@express-session/session/cookie.js\")\n  , Store = __webpack_require__(/*! ./session/store */ \"./node_modules/_express-session@1.15.6@express-session/session/store.js\")\n\n// environment\n\nvar env = \"development\";\n\n/**\n * Expose the middleware.\n */\n\nexports = module.exports = session;\n\n/**\n * Expose constructors.\n */\n\nexports.Store = Store;\nexports.Cookie = Cookie;\nexports.Session = Session;\nexports.MemoryStore = MemoryStore;\n\n/**\n * Warning message for `MemoryStore` usage in production.\n * @private\n */\n\nvar warning = 'Warning: connect.session() MemoryStore is not\\n'\n  + 'designed for a production environment, as it will leak\\n'\n  + 'memory, and will not scale past a single process.';\n\n/**\n * Node.js 0.8+ async implementation.\n * @private\n */\n\n/* istanbul ignore next */\nvar defer = typeof setImmediate === 'function'\n  ? setImmediate\n  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }\n\n/**\n * Setup session store with the given `options`.\n *\n * @param {Object} [options]\n * @param {Object} [options.cookie] Options for cookie\n * @param {Function} [options.genid]\n * @param {String} [options.name=connect.sid] Session ID cookie name\n * @param {Boolean} [options.proxy]\n * @param {Boolean} [options.resave] Resave unmodified sessions back to the store\n * @param {Boolean} [options.rolling] Enable/disable rolling session expiration\n * @param {Boolean} [options.saveUninitialized] Save uninitialized sessions to the store\n * @param {String|Array} [options.secret] Secret for signing session ID\n * @param {Object} [options.store=MemoryStore] Session store\n * @param {String} [options.unset]\n * @return {Function} middleware\n * @public\n */\n\nfunction session(options) {\n  var opts = options || {}\n\n  // get the cookie options\n  var cookieOptions = opts.cookie || {}\n\n  // get the session id generate function\n  var generateId = opts.genid || generateSessionId\n\n  // get the session cookie name\n  var name = opts.name || opts.key || 'connect.sid'\n\n  // get the session store\n  var store = opts.store || new MemoryStore()\n\n  // get the trust proxy setting\n  var trustProxy = opts.proxy\n\n  // get the resave session option\n  var resaveSession = opts.resave;\n\n  // get the rolling session option\n  var rollingSessions = Boolean(opts.rolling)\n\n  // get the save uninitialized session option\n  var saveUninitializedSession = opts.saveUninitialized\n\n  // get the cookie signing secret\n  var secret = opts.secret\n\n  if (typeof generateId !== 'function') {\n    throw new TypeError('genid option must be a function');\n  }\n\n  if (resaveSession === undefined) {\n    deprecate('undefined resave option; provide resave option');\n    resaveSession = true;\n  }\n\n  if (saveUninitializedSession === undefined) {\n    deprecate('undefined saveUninitialized option; provide saveUninitialized option');\n    saveUninitializedSession = true;\n  }\n\n  if (opts.unset && opts.unset !== 'destroy' && opts.unset !== 'keep') {\n    throw new TypeError('unset option must be \"destroy\" or \"keep\"');\n  }\n\n  // TODO: switch to \"destroy\" on next major\n  var unsetDestroy = opts.unset === 'destroy'\n\n  if (Array.isArray(secret) && secret.length === 0) {\n    throw new TypeError('secret option array must contain one or more strings');\n  }\n\n  if (secret && !Array.isArray(secret)) {\n    secret = [secret];\n  }\n\n  if (!secret) {\n    deprecate('req.secret; provide secret option');\n  }\n\n  // notify user that this store is not\n  // meant for a production environment\n  /* istanbul ignore next: not tested */\n  if ('production' == env && store instanceof MemoryStore) {\n    console.warn(warning);\n  }\n\n  // generates the new session\n  store.generate = function(req){\n    req.sessionID = generateId(req);\n    req.session = new Session(req);\n    req.session.cookie = new Cookie(cookieOptions);\n\n    if (cookieOptions.secure === 'auto') {\n      req.session.cookie.secure = issecure(req, trustProxy);\n    }\n  };\n\n  var storeImplementsTouch = typeof store.touch === 'function';\n\n  // register event listeners for the store to track readiness\n  var storeReady = true\n  store.on('disconnect', function ondisconnect() {\n    storeReady = false\n  })\n  store.on('connect', function onconnect() {\n    storeReady = true\n  })\n\n  return function session(req, res, next) {\n    // self-awareness\n    if (req.session) {\n      next()\n      return\n    }\n\n    // Handle connection as if there is no session if\n    // the store has temporarily disconnected etc\n    if (!storeReady) {\n      debug('store is disconnected')\n      next()\n      return\n    }\n\n    // pathname mismatch\n    var originalPath = parseUrl.original(req).pathname || '/'\n    if (originalPath.indexOf(cookieOptions.path || '/') !== 0) return next();\n\n    // ensure a secret is available or bail\n    if (!secret && !req.secret) {\n      next(new Error('secret option required for sessions'));\n      return;\n    }\n\n    // backwards compatibility for signed cookies\n    // req.secret is passed from the cookie parser middleware\n    var secrets = secret || [req.secret];\n\n    var originalHash;\n    var originalId;\n    var savedHash;\n    var touched = false\n\n    // expose store\n    req.sessionStore = store;\n\n    // get the session ID from the cookie\n    var cookieId = req.sessionID = getcookie(req, name, secrets);\n\n    // set-cookie\n    onHeaders(res, function(){\n      if (!req.session) {\n        debug('no session');\n        return;\n      }\n\n      if (!shouldSetCookie(req)) {\n        return;\n      }\n\n      // only send secure cookies via https\n      if (req.session.cookie.secure && !issecure(req, trustProxy)) {\n        debug('not secured');\n        return;\n      }\n\n      if (!touched) {\n        // touch session\n        req.session.touch()\n        touched = true\n      }\n\n      // set cookie\n      setcookie(res, name, req.sessionID, secrets[0], req.session.cookie.data);\n    });\n\n    // proxy end() to commit the session\n    var _end = res.end;\n    var _write = res.write;\n    var ended = false;\n    res.end = function end(chunk, encoding) {\n      if (ended) {\n        return false;\n      }\n\n      ended = true;\n\n      var ret;\n      var sync = true;\n\n      function writeend() {\n        if (sync) {\n          ret = _end.call(res, chunk, encoding);\n          sync = false;\n          return;\n        }\n\n        _end.call(res);\n      }\n\n      function writetop() {\n        if (!sync) {\n          return ret;\n        }\n\n        if (chunk == null) {\n          ret = true;\n          return ret;\n        }\n\n        var contentLength = Number(res.getHeader('Content-Length'));\n\n        if (!isNaN(contentLength) && contentLength > 0) {\n          // measure chunk\n          chunk = !Buffer.isBuffer(chunk)\n            ? new Buffer(chunk, encoding)\n            : chunk;\n          encoding = undefined;\n\n          if (chunk.length !== 0) {\n            debug('split response');\n            ret = _write.call(res, chunk.slice(0, chunk.length - 1));\n            chunk = chunk.slice(chunk.length - 1, chunk.length);\n            return ret;\n          }\n        }\n\n        ret = _write.call(res, chunk, encoding);\n        sync = false;\n\n        return ret;\n      }\n\n      if (shouldDestroy(req)) {\n        // destroy session\n        debug('destroying');\n        store.destroy(req.sessionID, function ondestroy(err) {\n          if (err) {\n            defer(next, err);\n          }\n\n          debug('destroyed');\n          writeend();\n        });\n\n        return writetop();\n      }\n\n      // no session to save\n      if (!req.session) {\n        debug('no session');\n        return _end.call(res, chunk, encoding);\n      }\n\n      if (!touched) {\n        // touch session\n        req.session.touch()\n        touched = true\n      }\n\n      if (shouldSave(req)) {\n        req.session.save(function onsave(err) {\n          if (err) {\n            defer(next, err);\n          }\n\n          writeend();\n        });\n\n        return writetop();\n      } else if (storeImplementsTouch && shouldTouch(req)) {\n        // store implements touch method\n        debug('touching');\n        store.touch(req.sessionID, req.session, function ontouch(err) {\n          if (err) {\n            defer(next, err);\n          }\n\n          debug('touched');\n          writeend();\n        });\n\n        return writetop();\n      }\n\n      return _end.call(res, chunk, encoding);\n    };\n\n    // generate the session\n    function generate() {\n      store.generate(req);\n      originalId = req.sessionID;\n      originalHash = hash(req.session);\n      wrapmethods(req.session);\n    }\n\n    // wrap session methods\n    function wrapmethods(sess) {\n      var _reload = sess.reload\n      var _save = sess.save;\n\n      function reload(callback) {\n        debug('reloading %s', this.id)\n        _reload.call(this, function () {\n          wrapmethods(req.session)\n          callback.apply(this, arguments)\n        })\n      }\n\n      function save() {\n        debug('saving %s', this.id);\n        savedHash = hash(this);\n        _save.apply(this, arguments);\n      }\n\n      Object.defineProperty(sess, 'reload', {\n        configurable: true,\n        enumerable: false,\n        value: reload,\n        writable: true\n      })\n\n      Object.defineProperty(sess, 'save', {\n        configurable: true,\n        enumerable: false,\n        value: save,\n        writable: true\n      });\n    }\n\n    // check if session has been modified\n    function isModified(sess) {\n      return originalId !== sess.id || originalHash !== hash(sess);\n    }\n\n    // check if session has been saved\n    function isSaved(sess) {\n      return originalId === sess.id && savedHash === hash(sess);\n    }\n\n    // determine if session should be destroyed\n    function shouldDestroy(req) {\n      return req.sessionID && unsetDestroy && req.session == null;\n    }\n\n    // determine if session should be saved to store\n    function shouldSave(req) {\n      // cannot set cookie without a session ID\n      if (typeof req.sessionID !== 'string') {\n        debug('session ignored because of bogus req.sessionID %o', req.sessionID);\n        return false;\n      }\n\n      return !saveUninitializedSession && cookieId !== req.sessionID\n        ? isModified(req.session)\n        : !isSaved(req.session)\n    }\n\n    // determine if session should be touched\n    function shouldTouch(req) {\n      // cannot set cookie without a session ID\n      if (typeof req.sessionID !== 'string') {\n        debug('session ignored because of bogus req.sessionID %o', req.sessionID);\n        return false;\n      }\n\n      return cookieId === req.sessionID && !shouldSave(req);\n    }\n\n    // determine if cookie should be set on response\n    function shouldSetCookie(req) {\n      // cannot set cookie without a session ID\n      if (typeof req.sessionID !== 'string') {\n        return false;\n      }\n\n      return cookieId != req.sessionID\n        ? saveUninitializedSession || isModified(req.session)\n        : rollingSessions || req.session.cookie.expires != null && isModified(req.session);\n    }\n\n    // generate a session if the browser doesn't send a sessionID\n    if (!req.sessionID) {\n      debug('no SID sent, generating session');\n      generate();\n      next();\n      return;\n    }\n\n    // generate the session object\n    debug('fetching %s', req.sessionID);\n    store.get(req.sessionID, function(err, sess){\n      // error handling\n      if (err) {\n        debug('error %j', err);\n\n        if (err.code !== 'ENOENT') {\n          next(err);\n          return;\n        }\n\n        generate();\n      // no session\n      } else if (!sess) {\n        debug('no session found');\n        generate();\n      // populate req.session\n      } else {\n        debug('session found');\n        store.createSession(req, sess);\n        originalId = req.sessionID;\n        originalHash = hash(sess);\n\n        if (!resaveSession) {\n          savedHash = originalHash\n        }\n\n        wrapmethods(req.session);\n      }\n\n      next();\n    });\n  };\n};\n\n/**\n * Generate a session ID for a new session.\n *\n * @return {String}\n * @private\n */\n\nfunction generateSessionId(sess) {\n  return uid(24);\n}\n\n/**\n * Get the session ID cookie from request.\n *\n * @return {string}\n * @private\n */\n\nfunction getcookie(req, name, secrets) {\n  var header = req.headers.cookie;\n  var raw;\n  var val;\n\n  // read from cookie header\n  if (header) {\n    var cookies = cookie.parse(header);\n\n    raw = cookies[name];\n\n    if (raw) {\n      if (raw.substr(0, 2) === 's:') {\n        val = unsigncookie(raw.slice(2), secrets);\n\n        if (val === false) {\n          debug('cookie signature invalid');\n          val = undefined;\n        }\n      } else {\n        debug('cookie unsigned')\n      }\n    }\n  }\n\n  // back-compat read from cookieParser() signedCookies data\n  if (!val && req.signedCookies) {\n    val = req.signedCookies[name];\n\n    if (val) {\n      deprecate('cookie should be available in req.headers.cookie');\n    }\n  }\n\n  // back-compat read from cookieParser() cookies data\n  if (!val && req.cookies) {\n    raw = req.cookies[name];\n\n    if (raw) {\n      if (raw.substr(0, 2) === 's:') {\n        val = unsigncookie(raw.slice(2), secrets);\n\n        if (val) {\n          deprecate('cookie should be available in req.headers.cookie');\n        }\n\n        if (val === false) {\n          debug('cookie signature invalid');\n          val = undefined;\n        }\n      } else {\n        debug('cookie unsigned')\n      }\n    }\n  }\n\n  return val;\n}\n\n/**\n * Hash the given `sess` object omitting changes to `.cookie`.\n *\n * @param {Object} sess\n * @return {String}\n * @private\n */\n\nfunction hash(sess) {\n  return crc(JSON.stringify(sess, function (key, val) {\n    // ignore sess.cookie property\n    if (this === sess && key === 'cookie') {\n      return\n    }\n\n    return val\n  }))\n}\n\n/**\n * Determine if request is secure.\n *\n * @param {Object} req\n * @param {Boolean} [trustProxy]\n * @return {Boolean}\n * @private\n */\n\nfunction issecure(req, trustProxy) {\n  // socket is https server\n  if (req.connection && req.connection.encrypted) {\n    return true;\n  }\n\n  // do not trust proxy\n  if (trustProxy === false) {\n    return false;\n  }\n\n  // no explicit trust; try req.secure from express\n  if (trustProxy !== true) {\n    var secure = req.secure;\n    return typeof secure === 'boolean'\n      ? secure\n      : false;\n  }\n\n  // read the proto from x-forwarded-proto header\n  var header = req.headers['x-forwarded-proto'] || '';\n  var index = header.indexOf(',');\n  var proto = index !== -1\n    ? header.substr(0, index).toLowerCase().trim()\n    : header.toLowerCase().trim()\n\n  return proto === 'https';\n}\n\n/**\n * Set cookie on response.\n *\n * @private\n */\n\nfunction setcookie(res, name, val, secret, options) {\n  var signed = 's:' + signature.sign(val, secret);\n  var data = cookie.serialize(name, signed, options);\n\n  debug('set-cookie %s', data);\n\n  var prev = res.getHeader('set-cookie') || [];\n  var header = Array.isArray(prev) ? prev.concat(data) : [prev, data];\n\n  res.setHeader('set-cookie', header)\n}\n\n/**\n * Verify and decode the given `val` with `secrets`.\n *\n * @param {String} val\n * @param {Array} secrets\n * @returns {String|Boolean}\n * @private\n */\nfunction unsigncookie(val, secrets) {\n  for (var i = 0; i < secrets.length; i++) {\n    var result = signature.unsign(val, secrets[i]);\n\n    if (result !== false) {\n      return result;\n    }\n  }\n\n  return false;\n}\n\n\n//# sourceURL=webpack:///./node_modules/_express-session@1.15.6@express-session/index.js?");

/***/ }),

/***/ "./node_modules/_express-session@1.15.6@express-session/session/cookie.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_express-session@1.15.6@express-session/session/cookie.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * Connect - session - Cookie\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n */\n\nvar merge = __webpack_require__(/*! utils-merge */ \"utils-merge\")\n  , cookie = __webpack_require__(/*! cookie */ \"cookie\");\n\n/**\n * Initialize a new `Cookie` with the given `options`.\n *\n * @param {IncomingMessage} req\n * @param {Object} options\n * @api private\n */\n\nvar Cookie = module.exports = function Cookie(options) {\n  this.path = '/';\n  this.maxAge = null;\n  this.httpOnly = true;\n  if (options) merge(this, options);\n  this.originalMaxAge = undefined == this.originalMaxAge\n    ? this.maxAge\n    : this.originalMaxAge;\n};\n\n/*!\n * Prototype.\n */\n\nCookie.prototype = {\n\n  /**\n   * Set expires `date`.\n   *\n   * @param {Date} date\n   * @api public\n   */\n\n  set expires(date) {\n    this._expires = date;\n    this.originalMaxAge = this.maxAge;\n  },\n\n  /**\n   * Get expires `date`.\n   *\n   * @return {Date}\n   * @api public\n   */\n\n  get expires() {\n    return this._expires;\n  },\n\n  /**\n   * Set expires via max-age in `ms`.\n   *\n   * @param {Number} ms\n   * @api public\n   */\n\n  set maxAge(ms) {\n    this.expires = 'number' == typeof ms\n      ? new Date(Date.now() + ms)\n      : ms;\n  },\n\n  /**\n   * Get expires max-age in `ms`.\n   *\n   * @return {Number}\n   * @api public\n   */\n\n  get maxAge() {\n    return this.expires instanceof Date\n      ? this.expires.valueOf() - Date.now()\n      : this.expires;\n  },\n\n  /**\n   * Return cookie data object.\n   *\n   * @return {Object}\n   * @api private\n   */\n\n  get data() {\n    return {\n      originalMaxAge: this.originalMaxAge\n      , expires: this._expires\n      , secure: this.secure\n      , httpOnly: this.httpOnly\n      , domain: this.domain\n      , path: this.path\n      , sameSite: this.sameSite\n    }\n  },\n\n  /**\n   * Return a serialized cookie string.\n   *\n   * @return {String}\n   * @api public\n   */\n\n  serialize: function(name, val){\n    return cookie.serialize(name, val, this.data);\n  },\n\n  /**\n   * Return JSON representation of this cookie.\n   *\n   * @return {Object}\n   * @api private\n   */\n\n  toJSON: function(){\n    return this.data;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/_express-session@1.15.6@express-session/session/cookie.js?");

/***/ }),

/***/ "./node_modules/_express-session@1.15.6@express-session/session/memory.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_express-session@1.15.6@express-session/session/memory.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * express-session\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar Store = __webpack_require__(/*! ./store */ \"./node_modules/_express-session@1.15.6@express-session/session/store.js\")\nvar util = __webpack_require__(/*! util */ \"util\")\n\n/**\n * Shim setImmediate for node.js < 0.10\n * @private\n */\n\n/* istanbul ignore next */\nvar defer = typeof setImmediate === 'function'\n  ? setImmediate\n  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }\n\n/**\n * Module exports.\n */\n\nmodule.exports = MemoryStore\n\n/**\n * A session store in memory.\n * @public\n */\n\nfunction MemoryStore() {\n  Store.call(this)\n  this.sessions = Object.create(null)\n}\n\n/**\n * Inherit from Store.\n */\n\nutil.inherits(MemoryStore, Store)\n\n/**\n * Get all active sessions.\n *\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.all = function all(callback) {\n  var sessionIds = Object.keys(this.sessions)\n  var sessions = Object.create(null)\n\n  for (var i = 0; i < sessionIds.length; i++) {\n    var sessionId = sessionIds[i]\n    var session = getSession.call(this, sessionId)\n\n    if (session) {\n      sessions[sessionId] = session;\n    }\n  }\n\n  callback && defer(callback, null, sessions)\n}\n\n/**\n * Clear all sessions.\n *\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.clear = function clear(callback) {\n  this.sessions = Object.create(null)\n  callback && defer(callback)\n}\n\n/**\n * Destroy the session associated with the given session ID.\n *\n * @param {string} sessionId\n * @public\n */\n\nMemoryStore.prototype.destroy = function destroy(sessionId, callback) {\n  delete this.sessions[sessionId]\n  callback && defer(callback)\n}\n\n/**\n * Fetch session by the given session ID.\n *\n * @param {string} sessionId\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.get = function get(sessionId, callback) {\n  defer(callback, null, getSession.call(this, sessionId))\n}\n\n/**\n * Commit the given session associated with the given sessionId to the store.\n *\n * @param {string} sessionId\n * @param {object} session\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.set = function set(sessionId, session, callback) {\n  this.sessions[sessionId] = JSON.stringify(session)\n  callback && defer(callback)\n}\n\n/**\n * Get number of active sessions.\n *\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.length = function length(callback) {\n  this.all(function (err, sessions) {\n    if (err) return callback(err)\n    callback(null, Object.keys(sessions).length)\n  })\n}\n\n/**\n * Touch the given session object associated with the given session ID.\n *\n * @param {string} sessionId\n * @param {object} session\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.touch = function touch(sessionId, session, callback) {\n  var currentSession = getSession.call(this, sessionId)\n\n  if (currentSession) {\n    // update expiration\n    currentSession.cookie = session.cookie\n    this.sessions[sessionId] = JSON.stringify(currentSession)\n  }\n\n  callback && defer(callback)\n}\n\n/**\n * Get session from the store.\n * @private\n */\n\nfunction getSession(sessionId) {\n  var sess = this.sessions[sessionId]\n\n  if (!sess) {\n    return\n  }\n\n  // parse\n  sess = JSON.parse(sess)\n\n  var expires = typeof sess.cookie.expires === 'string'\n    ? new Date(sess.cookie.expires)\n    : sess.cookie.expires\n\n  // destroy expired session\n  if (expires && expires <= Date.now()) {\n    delete this.sessions[sessionId]\n    return\n  }\n\n  return sess\n}\n\n\n//# sourceURL=webpack:///./node_modules/_express-session@1.15.6@express-session/session/memory.js?");

/***/ }),

/***/ "./node_modules/_express-session@1.15.6@express-session/session/session.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_express-session@1.15.6@express-session/session/session.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * Connect - session - Session\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * MIT Licensed\n */\n\n\n\n/**\n * Expose Session.\n */\n\nmodule.exports = Session;\n\n/**\n * Create a new `Session` with the given request and `data`.\n *\n * @param {IncomingRequest} req\n * @param {Object} data\n * @api private\n */\n\nfunction Session(req, data) {\n  Object.defineProperty(this, 'req', { value: req });\n  Object.defineProperty(this, 'id', { value: req.sessionID });\n\n  if (typeof data === 'object' && data !== null) {\n    // merge data into this, ignoring prototype properties\n    for (var prop in data) {\n      if (!(prop in this)) {\n        this[prop] = data[prop]\n      }\n    }\n  }\n}\n\n/**\n * Update reset `.cookie.maxAge` to prevent\n * the cookie from expiring when the\n * session is still active.\n *\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'touch', function touch() {\n  return this.resetMaxAge();\n});\n\n/**\n * Reset `.maxAge` to `.originalMaxAge`.\n *\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'resetMaxAge', function resetMaxAge() {\n  this.cookie.maxAge = this.cookie.originalMaxAge;\n  return this;\n});\n\n/**\n * Save the session data with optional callback `fn(err)`.\n *\n * @param {Function} fn\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'save', function save(fn) {\n  this.req.sessionStore.set(this.id, this, fn || function(){});\n  return this;\n});\n\n/**\n * Re-loads the session data _without_ altering\n * the maxAge properties. Invokes the callback `fn(err)`,\n * after which time if no exception has occurred the\n * `req.session` property will be a new `Session` object,\n * although representing the same session.\n *\n * @param {Function} fn\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'reload', function reload(fn) {\n  var req = this.req\n    , store = this.req.sessionStore;\n  store.get(this.id, function(err, sess){\n    if (err) return fn(err);\n    if (!sess) return fn(new Error('failed to load session'));\n    store.createSession(req, sess);\n    fn();\n  });\n  return this;\n});\n\n/**\n * Destroy `this` session.\n *\n * @param {Function} fn\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'destroy', function destroy(fn) {\n  delete this.req.session;\n  this.req.sessionStore.destroy(this.id, fn);\n  return this;\n});\n\n/**\n * Regenerate this request's session.\n *\n * @param {Function} fn\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'regenerate', function regenerate(fn) {\n  this.req.sessionStore.regenerate(this.req, fn);\n  return this;\n});\n\n/**\n * Helper function for creating a method on a prototype.\n *\n * @param {Object} obj\n * @param {String} name\n * @param {Function} fn\n * @private\n */\nfunction defineMethod(obj, name, fn) {\n  Object.defineProperty(obj, name, {\n    configurable: true,\n    enumerable: false,\n    value: fn,\n    writable: true\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/_express-session@1.15.6@express-session/session/session.js?");

/***/ }),

/***/ "./node_modules/_express-session@1.15.6@express-session/session/store.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_express-session@1.15.6@express-session/session/store.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * Connect - session - Store\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar Cookie = __webpack_require__(/*! ./cookie */ \"./node_modules/_express-session@1.15.6@express-session/session/cookie.js\")\nvar EventEmitter = __webpack_require__(/*! events */ \"events\").EventEmitter\nvar Session = __webpack_require__(/*! ./session */ \"./node_modules/_express-session@1.15.6@express-session/session/session.js\")\nvar util = __webpack_require__(/*! util */ \"util\")\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = Store\n\n/**\n * Abstract base class for session stores.\n * @public\n */\n\nfunction Store () {\n  EventEmitter.call(this)\n}\n\n/**\n * Inherit from EventEmitter.\n */\n\nutil.inherits(Store, EventEmitter)\n\n/**\n * Re-generate the given requests's session.\n *\n * @param {IncomingRequest} req\n * @return {Function} fn\n * @api public\n */\n\nStore.prototype.regenerate = function(req, fn){\n  var self = this;\n  this.destroy(req.sessionID, function(err){\n    self.generate(req);\n    fn(err);\n  });\n};\n\n/**\n * Load a `Session` instance via the given `sid`\n * and invoke the callback `fn(err, sess)`.\n *\n * @param {String} sid\n * @param {Function} fn\n * @api public\n */\n\nStore.prototype.load = function(sid, fn){\n  var self = this;\n  this.get(sid, function(err, sess){\n    if (err) return fn(err);\n    if (!sess) return fn();\n    var req = { sessionID: sid, sessionStore: self };\n    fn(null, self.createSession(req, sess))\n  });\n};\n\n/**\n * Create session from JSON `sess` data.\n *\n * @param {IncomingRequest} req\n * @param {Object} sess\n * @return {Session}\n * @api private\n */\n\nStore.prototype.createSession = function(req, sess){\n  var expires = sess.cookie.expires\n    , orig = sess.cookie.originalMaxAge;\n  sess.cookie = new Cookie(sess.cookie);\n  if ('string' == typeof expires) sess.cookie.expires = new Date(expires);\n  sess.cookie.originalMaxAge = orig;\n  req.session = new Session(req, sess);\n  return req.session;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_express-session@1.15.6@express-session/session/store.js?");

/***/ }),

/***/ "./node_modules/_on-headers@1.0.2@on-headers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/_on-headers@1.0.2@on-headers/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * on-headers\n * Copyright(c) 2014 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = onHeaders\n\n/**\n * Create a replacement writeHead method.\n *\n * @param {function} prevWriteHead\n * @param {function} listener\n * @private\n */\n\nfunction createWriteHead (prevWriteHead, listener) {\n  var fired = false\n\n  // return function with core name and argument list\n  return function writeHead (statusCode) {\n    // set headers from arguments\n    var args = setWriteHeadHeaders.apply(this, arguments)\n\n    // fire listener\n    if (!fired) {\n      fired = true\n      listener.call(this)\n\n      // pass-along an updated status code\n      if (typeof args[0] === 'number' && this.statusCode !== args[0]) {\n        args[0] = this.statusCode\n        args.length = 1\n      }\n    }\n\n    return prevWriteHead.apply(this, args)\n  }\n}\n\n/**\n * Execute a listener when a response is about to write headers.\n *\n * @param {object} res\n * @return {function} listener\n * @public\n */\n\nfunction onHeaders (res, listener) {\n  if (!res) {\n    throw new TypeError('argument res is required')\n  }\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('argument listener must be a function')\n  }\n\n  res.writeHead = createWriteHead(res.writeHead, listener)\n}\n\n/**\n * Set headers contained in array on the response object.\n *\n * @param {object} res\n * @param {array} headers\n * @private\n */\n\nfunction setHeadersFromArray (res, headers) {\n  for (var i = 0; i < headers.length; i++) {\n    res.setHeader(headers[i][0], headers[i][1])\n  }\n}\n\n/**\n * Set headers contained in object on the response object.\n *\n * @param {object} res\n * @param {object} headers\n * @private\n */\n\nfunction setHeadersFromObject (res, headers) {\n  var keys = Object.keys(headers)\n  for (var i = 0; i < keys.length; i++) {\n    var k = keys[i]\n    if (k) res.setHeader(k, headers[k])\n  }\n}\n\n/**\n * Set headers and other properties on the response object.\n *\n * @param {number} statusCode\n * @private\n */\n\nfunction setWriteHeadHeaders (statusCode) {\n  var length = arguments.length\n  var headerIndex = length > 1 && typeof arguments[1] === 'string'\n    ? 2\n    : 1\n\n  var headers = length >= headerIndex + 1\n    ? arguments[headerIndex]\n    : undefined\n\n  this.statusCode = statusCode\n\n  if (Array.isArray(headers)) {\n    // handle array case\n    setHeadersFromArray(this, headers)\n  } else if (headers) {\n    // handle object case\n    setHeadersFromObject(this, headers)\n  }\n\n  // copy leading arguments\n  var args = new Array(Math.min(length, headerIndex))\n  for (var i = 0; i < args.length; i++) {\n    args[i] = arguments[i]\n  }\n\n  return args\n}\n\n\n//# sourceURL=webpack:///./node_modules/_on-headers@1.0.2@on-headers/index.js?");

/***/ }),

/***/ "./node_modules/_pnglib@0.0.1@pnglib/lib/pnglib.js":
/*!*********************************************************!*\
  !*** ./node_modules/_pnglib@0.0.1@pnglib/lib/pnglib.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * A handy class to calculate color values.\r\n *\r\n * @version 1.0\r\n * @author Robert Eisele <robert@xarg.org>\r\n * @copyright Copyright (c) 2010, Robert Eisele\r\n * @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/\r\n * @license http://www.opensource.org/licenses/bsd-license.php BSD License\r\n *\r\n */\r\n\r\n// Modified by George Chan <gchan@21cn.com>\r\n\r\nmodule.exports = function(width,height,depth) {\r\n\r\n\r\n    // helper functions for that ctx\r\n    function write(buffer, offs) {\r\n        for (var i = 2; i < arguments.length; i++) {\r\n            for (var j = 0; j < arguments[i].length; j++) {\r\n                buffer[offs++] = arguments[i].charAt(j);\r\n            }\r\n        }\r\n    }\r\n\r\n    function byte2(w) {\r\n        return String.fromCharCode((w >> 8) & 255, w & 255);\r\n    }\r\n\r\n    function byte4(w) {\r\n        return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);\r\n    }\r\n\r\n    function byte2lsb(w) {\r\n        return String.fromCharCode(w & 255, (w >> 8) & 255);\r\n    }\r\n\r\n    this.width   = width;\r\n    this.height  = height;\r\n    this.depth   = depth;\r\n\r\n    // pixel data and row filter identifier size\r\n    this.pix_size = height * (width + 1);\r\n\r\n    // deflate header, pix_size, block headers, adler32 checksum\r\n    this.data_size = 2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;\r\n\r\n    // offsets and sizes of Png chunks\r\n    this.ihdr_offs = 0;\t\t\t\t\t\t\t\t\t// IHDR offset and size\r\n    this.ihdr_size = 4 + 4 + 13 + 4;\r\n    this.plte_offs = this.ihdr_offs + this.ihdr_size;\t// PLTE offset and size\r\n    this.plte_size = 4 + 4 + 3 * depth + 4;\r\n    this.trns_offs = this.plte_offs + this.plte_size;\t// tRNS offset and size\r\n    this.trns_size = 4 + 4 + depth + 4;\r\n    this.idat_offs = this.trns_offs + this.trns_size;\t// IDAT offset and size\r\n    this.idat_size = 4 + 4 + this.data_size + 4;\r\n    this.iend_offs = this.idat_offs + this.idat_size;\t// IEND offset and size\r\n    this.iend_size = 4 + 4 + 4;\r\n    this.buffer_size  = this.iend_offs + this.iend_size;\t// total PNG size\r\n\r\n    this.buffer  = new Array();\r\n    this.palette = new Object();\r\n    this.pindex  = 0;\r\n\r\n    var _crc32 = new Array();\r\n\r\n    // initialize buffer with zero bytes\r\n    for (var i = 0; i < this.buffer_size; i++) {\r\n        this.buffer[i] = \"\\x00\";\r\n    }\r\n\r\n    // initialize non-zero elements\r\n    write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR', byte4(width), byte4(height), \"\\x08\\x03\");\r\n    write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');\r\n    write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');\r\n    write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');\r\n    write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');\r\n\r\n    // initialize deflate header\r\n    var header = ((8 + (7 << 4)) << 8) | (3 << 6);\r\n    header+= 31 - (header % 31);\r\n\r\n    write(this.buffer, this.idat_offs + 8, byte2(header));\r\n\r\n    // initialize deflate block headers\r\n    for (var i = 0; (i << 16) - 1 < this.pix_size; i++) {\r\n        var size, bits;\r\n        if (i + 0xffff < this.pix_size) {\r\n            size = 0xffff;\r\n            bits = \"\\x00\";\r\n        } else {\r\n            size = this.pix_size - (i << 16) - i;\r\n            bits = \"\\x01\";\r\n        }\r\n        write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2), bits, byte2lsb(size), byte2lsb(~size));\r\n    }\r\n\r\n    /* Create crc32 lookup table */\r\n    for (var i = 0; i < 256; i++) {\r\n        var c = i;\r\n        for (var j = 0; j < 8; j++) {\r\n            if (c & 1) {\r\n                c = -306674912 ^ ((c >> 1) & 0x7fffffff);\r\n            } else {\r\n                c = (c >> 1) & 0x7fffffff;\r\n            }\r\n        }\r\n        _crc32[i] = c;\r\n    }\r\n\r\n    // compute the index into a png for a given pixel\r\n    this.index = function(x,y) {\r\n        var i = y * (this.width + 1) + x + 1;\r\n        var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;\r\n        return j;\r\n    }\r\n\r\n    // convert a color and build up the palette\r\n    this.color = function(red, green, blue, alpha) {\r\n\r\n        alpha = alpha >= 0 ? alpha : 255;\r\n        var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;\r\n\r\n        if (typeof this.palette[color] == \"undefined\") {\r\n            if (this.pindex == this.depth) return \"\\x00\";\r\n\r\n            var ndx = this.plte_offs + 8 + 3 * this.pindex;\r\n\r\n            this.buffer[ndx + 0] = String.fromCharCode(red);\r\n            this.buffer[ndx + 1] = String.fromCharCode(green);\r\n            this.buffer[ndx + 2] = String.fromCharCode(blue);\r\n            this.buffer[this.trns_offs+8+this.pindex] = String.fromCharCode(alpha);\r\n\r\n            this.palette[color] = String.fromCharCode(this.pindex++);\r\n        }\r\n        return this.palette[color];\r\n    }\r\n\r\n    // output a PNG string, Base64 encoded\r\n    this.getBase64 = function() {\r\n\r\n        var s = this.getDump();\r\n\r\n        var ch = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\r\n        var c1, c2, c3, e1, e2, e3, e4;\r\n        var l = s.length;\r\n        var i = 0;\r\n        var r = \"\";\r\n\r\n        do {\r\n            c1 = s.charCodeAt(i);\r\n            e1 = c1 >> 2;\r\n            c2 = s.charCodeAt(i+1);\r\n            e2 = ((c1 & 3) << 4) | (c2 >> 4);\r\n            c3 = s.charCodeAt(i+2);\r\n            if (l < i+2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }\r\n            if (l < i+3) { e4 = 64; } else { e4 = c3 & 0x3f; }\r\n            r+= ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);\r\n        } while ((i+= 3) < l);\r\n        return r;\r\n    }\r\n\r\n    // output a PNG string\r\n    this.getDump = function() {\r\n\r\n        // compute adler32 of output pixels + row filter bytes\r\n        var BASE = 65521; /* largest prime smaller than 65536 */\r\n        var NMAX = 5552;  /* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */\r\n        var s1 = 1;\r\n        var s2 = 0;\r\n        var n = NMAX;\r\n\r\n        for (var y = 0; y < this.height; y++) {\r\n            for (var x = -1; x < this.width; x++) {\r\n                s1+= this.buffer[this.index(x, y)].charCodeAt(0);\r\n                s2+= s1;\r\n                if ((n-= 1) == 0) {\r\n                    s1%= BASE;\r\n                    s2%= BASE;\r\n                    n = NMAX;\r\n                }\r\n            }\r\n        }\r\n        s1%= BASE;\r\n        s2%= BASE;\r\n        write(this.buffer, this.idat_offs + this.idat_size - 8, byte4((s2 << 16) | s1));\r\n\r\n        // compute crc32 of the PNG chunks\r\n        function crc32(png, offs, size) {\r\n            var crc = -1;\r\n            for (var i = 4; i < size-4; i += 1) {\r\n                crc = _crc32[(crc ^ png[offs+i].charCodeAt(0)) & 0xff] ^ ((crc >> 8) & 0x00ffffff);\r\n            }\r\n            write(png, offs+size-4, byte4(crc ^ -1));\r\n        }\r\n\r\n        crc32(this.buffer, this.ihdr_offs, this.ihdr_size);\r\n        crc32(this.buffer, this.plte_offs, this.plte_size);\r\n        crc32(this.buffer, this.trns_offs, this.trns_size);\r\n        crc32(this.buffer, this.idat_offs, this.idat_size);\r\n        crc32(this.buffer, this.iend_offs, this.iend_size);\r\n\r\n        // convert PNG to string\r\n        return \"\\211PNG\\r\\n\\032\\n\"+this.buffer.join('');\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./node_modules/_pnglib@0.0.1@pnglib/lib/pnglib.js?");

/***/ }),

/***/ "./node_modules/_random-bytes@1.0.0@random-bytes/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/_random-bytes@1.0.0@random-bytes/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * random-bytes\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\")\n\n/**\n * Module variables.\n * @private\n */\n\nvar generateAttempts = crypto.randomBytes === crypto.pseudoRandomBytes ? 1 : 3\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = randomBytes\nmodule.exports.sync = randomBytesSync\n\n/**\n * Generates strong pseudo-random bytes.\n *\n * @param {number} size\n * @param {function} [callback]\n * @return {Promise}\n * @public\n */\n\nfunction randomBytes(size, callback) {\n  // validate callback is a function, if provided\n  if (callback !== undefined && typeof callback !== 'function') {\n    throw new TypeError('argument callback must be a function')\n  }\n\n  // require the callback without promises\n  if (!callback && !global.Promise) {\n    throw new TypeError('argument callback is required')\n  }\n\n  if (callback) {\n    // classic callback style\n    return generateRandomBytes(size, generateAttempts, callback)\n  }\n\n  return new Promise(function executor(resolve, reject) {\n    generateRandomBytes(size, generateAttempts, function onRandomBytes(err, str) {\n      if (err) return reject(err)\n      resolve(str)\n    })\n  })\n}\n\n/**\n * Generates strong pseudo-random bytes sync.\n *\n * @param {number} size\n * @return {Buffer}\n * @public\n */\n\nfunction randomBytesSync(size) {\n  var err = null\n\n  for (var i = 0; i < generateAttempts; i++) {\n    try {\n      return crypto.randomBytes(size)\n    } catch (e) {\n      err = e\n    }\n  }\n\n  throw err\n}\n\n/**\n * Generates strong pseudo-random bytes.\n *\n * @param {number} size\n * @param {number} attempts\n * @param {function} callback\n * @private\n */\n\nfunction generateRandomBytes(size, attempts, callback) {\n  crypto.randomBytes(size, function onRandomBytes(err, buf) {\n    if (!err) return callback(null, buf)\n    if (!--attempts) return callback(err)\n    setTimeout(generateRandomBytes.bind(null, size, attempts, callback), 10)\n  })\n}\n\n\n//# sourceURL=webpack:///./node_modules/_random-bytes@1.0.0@random-bytes/index.js?");

/***/ }),

/***/ "./node_modules/_uid-safe@2.1.5@uid-safe/index.js":
/*!********************************************************!*\
  !*** ./node_modules/_uid-safe@2.1.5@uid-safe/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * uid-safe\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015-2017 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar randomBytes = __webpack_require__(/*! random-bytes */ \"./node_modules/_random-bytes@1.0.0@random-bytes/index.js\")\n\n/**\n * Module variables.\n * @private\n */\n\nvar EQUAL_END_REGEXP = /=+$/\nvar PLUS_GLOBAL_REGEXP = /\\+/g\nvar SLASH_GLOBAL_REGEXP = /\\//g\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = uid\nmodule.exports.sync = uidSync\n\n/**\n * Create a unique ID.\n *\n * @param {number} length\n * @param {function} [callback]\n * @return {Promise}\n * @public\n */\n\nfunction uid (length, callback) {\n  // validate callback is a function, if provided\n  if (callback !== undefined && typeof callback !== 'function') {\n    throw new TypeError('argument callback must be a function')\n  }\n\n  // require the callback without promises\n  if (!callback && !global.Promise) {\n    throw new TypeError('argument callback is required')\n  }\n\n  if (callback) {\n    // classic callback style\n    return generateUid(length, callback)\n  }\n\n  return new Promise(function executor (resolve, reject) {\n    generateUid(length, function onUid (err, str) {\n      if (err) return reject(err)\n      resolve(str)\n    })\n  })\n}\n\n/**\n * Create a unique ID sync.\n *\n * @param {number} length\n * @return {string}\n * @public\n */\n\nfunction uidSync (length) {\n  return toString(randomBytes.sync(length))\n}\n\n/**\n * Generate a unique ID string.\n *\n * @param {number} length\n * @param {function} callback\n * @private\n */\n\nfunction generateUid (length, callback) {\n  randomBytes(length, function (err, buf) {\n    if (err) return callback(err)\n    callback(null, toString(buf))\n  })\n}\n\n/**\n * Change a Buffer into a string.\n *\n * @param {Buffer} buf\n * @return {string}\n * @private\n */\n\nfunction toString (buf) {\n  return buf.toString('base64')\n    .replace(EQUAL_END_REGEXP, '')\n    .replace(PLUS_GLOBAL_REGEXP, '-')\n    .replace(SLASH_GLOBAL_REGEXP, '_')\n}\n\n\n//# sourceURL=webpack:///./node_modules/_uid-safe@2.1.5@uid-safe/index.js?");

/***/ }),

/***/ "./src/controllers/accountController.js":
/*!**********************************************!*\
  !*** ./src/controllers/accountController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\")\r\nvar captchapng = __webpack_require__(/*! captchapng */ \"./node_modules/_captchapng@0.0.1@captchapng/lib/captchapng.js\");\r\nconst database=__webpack_require__(/*! ../model/databaseManager */ \"./src/model/databaseManager.js\")\r\n\r\n// 返回登录页面(get)\r\nexports.getLoginPage=(req,res)=>{\r\n    res.render('login', {people: [1,2,3]});\r\n}\r\n\r\n// 返回验证码\r\nexports.getVcode=(req,res)=>{\r\n    var code = parseInt(Math.random() * 9000 + 1000);//有且仅有4个数字\r\n    req.session.vcode=code;\r\n    console.log(req.session.vcode) \r\n    var p = new captchapng(100, 30, code);//宽100 高30 四位数字\r\n    p.color(0, 0, 0, 0);//底色\r\n    p.color(80, 80, 80, 255);//字体颜色\r\n    var img = p.getBase64();//转换成base64\r\n    var imgbase64 = new Buffer(img, 'base64');// 存放在imgbase64\r\n    \r\n    res.setHeader(\"Content-Type\",\"image/png;\")\r\n    res.end(imgbase64);\r\n}\r\n// 处理登录页面逻辑(post)\r\nexports.handleLogin=(req,res)=>{\r\n    const result = {status:1,message:\"登录成功\"}\r\n    console.log(req.session.vcode)\r\n    if(req.body.vcode!=req.session.vcode){\r\n        result.status = 2;\r\n        result.message = \"验证码错误\"\r\n        res.json(result);\r\n        return ;\r\n    }\r\n    database.findOne(\"account\",{username:req.body.username,password:req.body.password},(err,docs)=>{\r\n        if(!docs){\r\n            result.status=0;\r\n            result.message=\"账户或密码错误！\"\r\n        }else{\r\n            req.session.username=req.body.username\r\n        }\r\n        res.json(result);\r\n    })\r\n}\r\n// 返回注册页面(get)\r\nexports.getRegisterPage=(req,res)=>{\r\n    res.render('register', {people: [1,2,3]});\r\n}\r\n// 处理注册页面逻辑(post)\r\nexports.handleRegister=(req,res)=>{\r\n    const result = {status:1,message:\"注册成功\"}\r\n    database.findOne(\"account\",{username:req.body.username},(err,docs)=>{\r\n        if(!docs){\r\n            database.insertOne(\"account\",{username:req.body.username,password:req.body.username},(err,docs)=>{\r\n                if(err)\r\n                    console.log(err)\r\n            })\r\n        }else{\r\n            result.status=0;\r\n            result.message=\"账户已注册！\"\r\n        }\r\n        res.json(result);\r\n    })\r\n}\r\n// 退出\r\nexports.layout=(req,res)=>{\r\n    req.session.username=null;\r\n    res.setHeader(\"Content-Type\",\"text/html;charset=utf8;\")\r\n    res.end(\"<script>window.location.href='/account/login'</script>\");\r\n}\n\n//# sourceURL=webpack:///./src/controllers/accountController.js?");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"buffer\");\n\n//# sourceURL=webpack:///external_%22buffer%22?");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");\n\n//# sourceURL=webpack:///external_%22cookie%22?");

/***/ }),

/***/ "cookie-signature":
/*!***********************************!*\
  !*** external "cookie-signature" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-signature\");\n\n//# sourceURL=webpack:///external_%22cookie-signature%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "depd":
/*!***********************!*\
  !*** external "depd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"depd\");\n\n//# sourceURL=webpack:///external_%22depd%22?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"events\");\n\n//# sourceURL=webpack:///external_%22events%22?");

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

/***/ "parseurl":
/*!***************************!*\
  !*** external "parseurl" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"parseurl\");\n\n//# sourceURL=webpack:///external_%22parseurl%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ }),

/***/ "utils-merge":
/*!******************************!*\
  !*** external "utils-merge" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"utils-merge\");\n\n//# sourceURL=webpack:///external_%22utils-merge%22?");

/***/ })

/******/ });