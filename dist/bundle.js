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

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst server = express();\r\n__webpack_require__(/*! ejs */ \"ejs\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\n\r\n// 管理静态资源\r\nserver.use(express.static(\"dist/statics\"))\r\n// 处理post请求里的body，req.body能够访问\r\nserver.use(bodyParser.urlencoded())\r\n\r\n// 定义模板引擎\r\nserver.set('views', path.resolve(__dirname, 'dist/views'));\r\nserver.set('view engine','ejs');\r\n\r\nserver.use(\"/\",(req,res,next)=>{\r\n    next()\r\n})\r\n\r\n// 获取用户路由管理模块\r\nconst accountRouter = __webpack_require__(/*! ./src/routers/accountRouter */ \"./src/routers/accountRouter.js\")\r\nserver.use(\"/account\",accountRouter)\r\n\r\n// 获取系统路由管理模块\r\nconst manageRouter = __webpack_require__(/*! ./src/routers/manageRouter */ \"./src/routers/manageRouter.js\")\r\nserver.use(\"/studentmanager\",manageRouter)\r\n\r\n\r\nserver.listen(\"1024\",(err)=>{\r\n    console.log(err)\r\n})\n/* WEBPACK VAR INJECTION */}.call(this, \"\"))\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/_captchapng@0.0.1@captchapng/lib/captchapng.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_captchapng@0.0.1@captchapng/lib/captchapng.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\r\n * captchapng\r\n * Captcha PNG generator\r\n * @Author: George Chan\r\n * @Email: gchan@21cn.com\r\n * @Version: 0.0.1\r\n * @Date: 2013-08-18\r\n * @license http://www.opensource.org/licenses/bsd-license.php BSD License\r\n */\r\n\r\nvar pnglib = __webpack_require__(/*! pnglib */ \"./node_modules/_pnglib@0.0.1@pnglib/lib/pnglib.js\");\r\nthis.numMask = [];\r\nthis.numMask[0]=[];\r\nthis.numMask[0]=loadNumMask0();\r\nthis.numMask[1]=loadNumMask1();\r\nmyself = this;\r\n\r\nfunction loadNumMask0() {\r\n    var numbmp=[];\r\n    numbmp[0]=[\"0011111000\",\"0111111110\",\"0111111110\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"1110001111\",\"0111111111\",\" 111111110\",\"0011111100\"];\r\n    numbmp[1]=[\"0000011\",\"0000111\",\"0011111\",\"1111111\",\"1111111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\",\"0001111\"];\r\n    numbmp[2]=[\"001111100\",\"011111110\",\"111111111\",\"111001111\",\"111001111\",\"111001111\",\"111001111\",\"000011111\",\"000011110\",\"000111110\",\"000111100\",\"000111100\",\"001111000\",\"001111000\",\"011110000\",\"011110000\",\"111111111\",\"111111111\",\"111111111\"];\r\n    numbmp[3]=[\"0011111100\",\"0111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"1111001111\",\"0000001111\",\"0001111110\",\"0001111100\",\"0001111111\",\"0000001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111111111\",\"0111111110\",\"0011111100\"];\r\n    numbmp[4]=[\"00001111110\",\"00001111110\",\"00011111110\",\"00011111110\",\"00011111110\",\"00111011110\",\"00111011110\",\"00111011110\",\"01110011110\",\"01110011110\",\"01110011110\",\"11100011110\",\"11111111111\",\"11111111111\",\"11111111111\",\"11111111111\",\"00000011110\",\"00000011110\",\"00000011110\"];\r\n    numbmp[5]=[\"1111111111\",\"1111111111\",\"1111111111\",\"1111000000\",\"1111000000\",\"1111011100\",\"1111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"0000001111\",\"0000001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111111111\",\"0111111110\",\"0011111100\"];\r\n    numbmp[6]=[\"0011111100\",\"0111111110\",\"0111111111\",\"1111001111\",\"1111001111\",\"1111000000\",\"1111011100\",\"1111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"0111111111\",\"0111111110\",\"0011111100\"];\r\n    numbmp[7]=[\"11111111\",\"11111111\",\"11111111\",\"00001111\",\"00001111\",\"00001111\",\"00001110\",\"00001110\",\"00011110\",\"00011110\",\"00011110\",\"00011100\",\"00111100\",\"00111100\",\"00111100\",\"00111100\",\"00111000\",\"01111000\",\"01111000\"];\r\n    numbmp[8]=[\"0011111100\",\"0111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"0111111110\",\"0011111100\",\"0111111110\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111111111\",\"0111111110\",\"0011111100\"];\r\n    numbmp[9]=[\"0011111100\",\"0111111110\",\"1111111111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111001111\",\"1111111111\",\"0111111111\",\"0011101111\",\"0000001111\",\"1111001111\",\"1111001111\",\"1111111110\",\"0111111110\",\"0011111000\"];\r\n\r\n    return numbmp;\r\n}\r\n\r\nfunction loadNumMask1() {\r\n    var numbmp=[];\r\n    numbmp[0] = [\"000000001111000\",\"000000111111110\",\"000001110000110\",\"000011000000011\",\"000110000000011\",\"001100000000011\",\"011100000000011\",\"011000000000011\",\"111000000000110\",\"110000000000110\",\"110000000001110\",\"110000000001100\",\"110000000011000\",\"110000000111000\",\"011000011110000\",\"011111111000000\",\"000111110000000\"];\r\n    numbmp[1] = [\"00000111\",\"00001111\",\"00011110\",\"00010110\",\"00001100\",\"00001100\",\"00011000\",\"00011000\",\"00110000\",\"00110000\",\"00110000\",\"01100000\",\"01100000\",\"01100000\",\"11000000\",\"11000000\",\"11000000\"];\r\n    numbmp[2] = [\"00000011111000\",\"00001111111110\",\"00011100000110\",\"00011000000011\",\"00000000000011\",\"00000000000011\",\"00000000000011\",\"00000000000110\",\"00000000001110\",\"00000000011100\",\"00000001110000\",\"00000111100000\",\"00001110000000\",\"00111100000000\",\"01110000000000\",\"11111111110000\",\"11111111111110\",\"00000000011110\"];\r\n    numbmp[3] = [\"000000111111000\",\"000011111111110\",\"000111100000111\",\"000110000000011\",\"000000000000011\",\"000000000000011\",\"000000000001110\",\"000000111111000\",\"000000111111000\",\"000000000011100\",\"000000000001100\",\"000000000001100\",\"110000000001100\",\"111000000011100\",\"111100000111000\",\"001111111110000\",\"000111111000000\"];\r\n    numbmp[4] = [\"00000011000001\",\"00000110000011\",\"00001100000010\",\"00011000000110\",\"00111000000110\",\"00110000001100\",\"01100000001100\",\"01100000001000\",\"11000000011000\",\"11111111111111\",\"11111111111111\",\"00000000110000\",\"00000000110000\",\"00000000100000\",\"00000001100000\",\"00000001100000\",\"00000001100000\"];\r\n    numbmp[5] = [\"0000001111111111\",\"0000011111111111\",\"0000111000000000\",\"0000110000000000\",\"0000110000000000\",\"0001110000000000\",\"0001101111100000\",\"0001111111111000\",\"0001110000011000\",\"0000000000001100\",\"0000000000001100\",\"0000000000001100\",\"1100000000001100\",\"1110000000011000\",\"1111000001111000\",\"0111111111100000\",\"0001111110000000\"];\r\n    numbmp[6] = [\"000000001111100\",\"000000111111110\",\"000011110000111\",\"000111000000011\",\"000110000000000\",\"001100000000000\",\"011001111100000\",\"011111111111000\",\"111110000011000\",\"111000000001100\",\"110000000001100\",\"110000000001100\",\"110000000001100\",\"111000000011000\",\"011100001110000\",\"001111111100000\",\"000111110000000\"];\r\n    numbmp[7] = [\"1111111111111\",\"1111111111111\",\"0000000001110\",\"0000000011100\",\"0000000111000\",\"0000000110000\",\"0000001100000\",\"0000011100000\",\"0000111000000\",\"0000110000000\",\"0001100000000\",\"0011100000000\",\"0011000000000\",\"0111000000000\",\"1110000000000\",\"1100000000000\",\"1100000000000\"];\r\n    numbmp[8] = [\"0000000111110000\",\"0000011111111100\",\"0000011000001110\",\"0000110000000111\",\"0000110000011111\",\"0000110001111000\",\"0000011111100000\",\"0000011110000000\",\"0001111111000000\",\"0011100011100000\",\"0111000001110000\",\"1110000000110000\",\"1100000000110000\",\"1100000001110000\",\"1110000011100000\",\"0111111111000000\",\"0001111100000000\"];\r\n    numbmp[9] = [\"0000011111000\",\"0001111111110\",\"0011100000110\",\"0011000000011\",\"0110000000011\",\"0110000000011\",\"0110000000011\",\"0110000000111\",\"0011000011110\",\"0011111111110\",\"0000111100110\",\"0000000001100\",\"0000000011000\",\"0000000111000\",\"0000011110000\",\"1111111000000\",\"1111110000000\"];\r\n    return numbmp;\r\n}\r\n\r\n\r\nfunction captchapng(width,height,dispNumber) {\r\n    this.width   = width;\r\n    this.height  = height;\r\n    this.depth   = 8;\r\n    this.dispNumber = \"\"+dispNumber.toString();\r\n    this.widthAverage = parseInt(this.width/this.dispNumber.length);\r\n\r\n    var p = new pnglib(this.width,this.height,this.depth);\r\n\r\n    for (var numSection=0;numSection<this.dispNumber.length;numSection++){\r\n\r\n        var dispNum = this.dispNumber[numSection].valueOf();\r\n\r\n        var font = parseInt(Math.random()*myself.numMask.length);\r\n        font = (font>=myself.numMask.length?0:font);\r\n        //var random_x_offs = 0, random_y_offs = 0;\r\n        var random_x_offs = parseInt(Math.random()*(this.widthAverage - myself.numMask[font][dispNum][0].length));\r\n        var random_y_offs = parseInt(Math.random()*(this.height - myself.numMask[font][dispNum].length));\r\n        random_x_offs = (random_x_offs<0?0:random_x_offs);\r\n        random_y_offs = (random_y_offs<0?0:random_y_offs);\r\n\r\n        for (var i=0;(i<myself.numMask[font][dispNum].length) && ((i+random_y_offs)<this.height);i++){\r\n            var lineIndex = p.index(this.widthAverage * numSection + random_x_offs,i+random_y_offs);\r\n            for (var j=0;j<myself.numMask[font][dispNum][i].length;j++){\r\n                if ((myself.numMask[font][dispNum][i][j]=='1') && (this.widthAverage * numSection + random_x_offs+j)<this.width){\r\n                    p.buffer[lineIndex+j]='\\x01';\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return p;\r\n}\r\n\r\nmodule.exports = captchapng;\r\n\n\n//# sourceURL=webpack:///./node_modules/_captchapng@0.0.1@captchapng/lib/captchapng.js?");

/***/ }),

/***/ "./node_modules/_pnglib@0.0.1@pnglib/lib/pnglib.js":
/*!*********************************************************!*\
  !*** ./node_modules/_pnglib@0.0.1@pnglib/lib/pnglib.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * A handy class to calculate color values.\r\n *\r\n * @version 1.0\r\n * @author Robert Eisele <robert@xarg.org>\r\n * @copyright Copyright (c) 2010, Robert Eisele\r\n * @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/\r\n * @license http://www.opensource.org/licenses/bsd-license.php BSD License\r\n *\r\n */\r\n\r\n// Modified by George Chan <gchan@21cn.com>\r\n\r\nmodule.exports = function(width,height,depth) {\r\n\r\n\r\n    // helper functions for that ctx\r\n    function write(buffer, offs) {\r\n        for (var i = 2; i < arguments.length; i++) {\r\n            for (var j = 0; j < arguments[i].length; j++) {\r\n                buffer[offs++] = arguments[i].charAt(j);\r\n            }\r\n        }\r\n    }\r\n\r\n    function byte2(w) {\r\n        return String.fromCharCode((w >> 8) & 255, w & 255);\r\n    }\r\n\r\n    function byte4(w) {\r\n        return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);\r\n    }\r\n\r\n    function byte2lsb(w) {\r\n        return String.fromCharCode(w & 255, (w >> 8) & 255);\r\n    }\r\n\r\n    this.width   = width;\r\n    this.height  = height;\r\n    this.depth   = depth;\r\n\r\n    // pixel data and row filter identifier size\r\n    this.pix_size = height * (width + 1);\r\n\r\n    // deflate header, pix_size, block headers, adler32 checksum\r\n    this.data_size = 2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;\r\n\r\n    // offsets and sizes of Png chunks\r\n    this.ihdr_offs = 0;\t\t\t\t\t\t\t\t\t// IHDR offset and size\r\n    this.ihdr_size = 4 + 4 + 13 + 4;\r\n    this.plte_offs = this.ihdr_offs + this.ihdr_size;\t// PLTE offset and size\r\n    this.plte_size = 4 + 4 + 3 * depth + 4;\r\n    this.trns_offs = this.plte_offs + this.plte_size;\t// tRNS offset and size\r\n    this.trns_size = 4 + 4 + depth + 4;\r\n    this.idat_offs = this.trns_offs + this.trns_size;\t// IDAT offset and size\r\n    this.idat_size = 4 + 4 + this.data_size + 4;\r\n    this.iend_offs = this.idat_offs + this.idat_size;\t// IEND offset and size\r\n    this.iend_size = 4 + 4 + 4;\r\n    this.buffer_size  = this.iend_offs + this.iend_size;\t// total PNG size\r\n\r\n    this.buffer  = new Array();\r\n    this.palette = new Object();\r\n    this.pindex  = 0;\r\n\r\n    var _crc32 = new Array();\r\n\r\n    // initialize buffer with zero bytes\r\n    for (var i = 0; i < this.buffer_size; i++) {\r\n        this.buffer[i] = \"\\x00\";\r\n    }\r\n\r\n    // initialize non-zero elements\r\n    write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR', byte4(width), byte4(height), \"\\x08\\x03\");\r\n    write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');\r\n    write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');\r\n    write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');\r\n    write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');\r\n\r\n    // initialize deflate header\r\n    var header = ((8 + (7 << 4)) << 8) | (3 << 6);\r\n    header+= 31 - (header % 31);\r\n\r\n    write(this.buffer, this.idat_offs + 8, byte2(header));\r\n\r\n    // initialize deflate block headers\r\n    for (var i = 0; (i << 16) - 1 < this.pix_size; i++) {\r\n        var size, bits;\r\n        if (i + 0xffff < this.pix_size) {\r\n            size = 0xffff;\r\n            bits = \"\\x00\";\r\n        } else {\r\n            size = this.pix_size - (i << 16) - i;\r\n            bits = \"\\x01\";\r\n        }\r\n        write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2), bits, byte2lsb(size), byte2lsb(~size));\r\n    }\r\n\r\n    /* Create crc32 lookup table */\r\n    for (var i = 0; i < 256; i++) {\r\n        var c = i;\r\n        for (var j = 0; j < 8; j++) {\r\n            if (c & 1) {\r\n                c = -306674912 ^ ((c >> 1) & 0x7fffffff);\r\n            } else {\r\n                c = (c >> 1) & 0x7fffffff;\r\n            }\r\n        }\r\n        _crc32[i] = c;\r\n    }\r\n\r\n    // compute the index into a png for a given pixel\r\n    this.index = function(x,y) {\r\n        var i = y * (this.width + 1) + x + 1;\r\n        var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;\r\n        return j;\r\n    }\r\n\r\n    // convert a color and build up the palette\r\n    this.color = function(red, green, blue, alpha) {\r\n\r\n        alpha = alpha >= 0 ? alpha : 255;\r\n        var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;\r\n\r\n        if (typeof this.palette[color] == \"undefined\") {\r\n            if (this.pindex == this.depth) return \"\\x00\";\r\n\r\n            var ndx = this.plte_offs + 8 + 3 * this.pindex;\r\n\r\n            this.buffer[ndx + 0] = String.fromCharCode(red);\r\n            this.buffer[ndx + 1] = String.fromCharCode(green);\r\n            this.buffer[ndx + 2] = String.fromCharCode(blue);\r\n            this.buffer[this.trns_offs+8+this.pindex] = String.fromCharCode(alpha);\r\n\r\n            this.palette[color] = String.fromCharCode(this.pindex++);\r\n        }\r\n        return this.palette[color];\r\n    }\r\n\r\n    // output a PNG string, Base64 encoded\r\n    this.getBase64 = function() {\r\n\r\n        var s = this.getDump();\r\n\r\n        var ch = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\r\n        var c1, c2, c3, e1, e2, e3, e4;\r\n        var l = s.length;\r\n        var i = 0;\r\n        var r = \"\";\r\n\r\n        do {\r\n            c1 = s.charCodeAt(i);\r\n            e1 = c1 >> 2;\r\n            c2 = s.charCodeAt(i+1);\r\n            e2 = ((c1 & 3) << 4) | (c2 >> 4);\r\n            c3 = s.charCodeAt(i+2);\r\n            if (l < i+2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }\r\n            if (l < i+3) { e4 = 64; } else { e4 = c3 & 0x3f; }\r\n            r+= ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);\r\n        } while ((i+= 3) < l);\r\n        return r;\r\n    }\r\n\r\n    // output a PNG string\r\n    this.getDump = function() {\r\n\r\n        // compute adler32 of output pixels + row filter bytes\r\n        var BASE = 65521; /* largest prime smaller than 65536 */\r\n        var NMAX = 5552;  /* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */\r\n        var s1 = 1;\r\n        var s2 = 0;\r\n        var n = NMAX;\r\n\r\n        for (var y = 0; y < this.height; y++) {\r\n            for (var x = -1; x < this.width; x++) {\r\n                s1+= this.buffer[this.index(x, y)].charCodeAt(0);\r\n                s2+= s1;\r\n                if ((n-= 1) == 0) {\r\n                    s1%= BASE;\r\n                    s2%= BASE;\r\n                    n = NMAX;\r\n                }\r\n            }\r\n        }\r\n        s1%= BASE;\r\n        s2%= BASE;\r\n        write(this.buffer, this.idat_offs + this.idat_size - 8, byte4((s2 << 16) | s1));\r\n\r\n        // compute crc32 of the PNG chunks\r\n        function crc32(png, offs, size) {\r\n            var crc = -1;\r\n            for (var i = 4; i < size-4; i += 1) {\r\n                crc = _crc32[(crc ^ png[offs+i].charCodeAt(0)) & 0xff] ^ ((crc >> 8) & 0x00ffffff);\r\n            }\r\n            write(png, offs+size-4, byte4(crc ^ -1));\r\n        }\r\n\r\n        crc32(this.buffer, this.ihdr_offs, this.ihdr_size);\r\n        crc32(this.buffer, this.plte_offs, this.plte_size);\r\n        crc32(this.buffer, this.trns_offs, this.trns_size);\r\n        crc32(this.buffer, this.idat_offs, this.idat_size);\r\n        crc32(this.buffer, this.iend_offs, this.iend_size);\r\n\r\n        // convert PNG to string\r\n        return \"\\211PNG\\r\\n\\032\\n\"+this.buffer.join('');\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./node_modules/_pnglib@0.0.1@pnglib/lib/pnglib.js?");

/***/ }),

/***/ "./src/controllers/accountController.js":
/*!**********************************************!*\
  !*** ./src/controllers/accountController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\")\r\nvar captchapng = __webpack_require__(/*! captchapng */ \"./node_modules/_captchapng@0.0.1@captchapng/lib/captchapng.js\");\r\nconst database=__webpack_require__(/*! ../model/databaseManager */ \"./src/model/databaseManager.js\")\r\n\r\n// 返回登录页面(get)\r\nexports.getLoginPage=(req,res)=>{\r\n    res.render('login', {people: [1,2,3]});\r\n}\r\n// 处理登录页面逻辑(post)\r\nexports.handleLogin=(req,res)=>{\r\n    const result = {status:1,message:\"登录成功\"}\r\n    database.findOne(\"account\",{username:req.body.username,password:req.body.password},(err,docs)=>{\r\n        if(!docs){\r\n            result.status=0;\r\n            result.message=\"账户或密码错误！\"\r\n        }\r\n        res.json(result);\r\n    })\r\n}\r\n// 返回验证码\r\nexports.getVcode=(req,res)=>{\r\n    var code = parseInt(Math.random() * 9000 + 1000);//有且仅有4个数字\r\n    var p = new captchapng(100, 30, code);//宽100 高30 四位数字\r\n    p.color(0, 0, 0, 0);//底色\r\n    p.color(80, 80, 80, 255);//字体颜色\r\n    var img = p.getBase64();//转换成base64\r\n    var imgbase64 = new Buffer(img, 'base64');// 存放在imgbase64\r\n    \r\n    res.setHeader(\"Content-Type\",\"image/png;\")\r\n    res.end(imgbase64);\r\n}\r\n\r\n// 返回注册页面(get)\r\nexports.getRegisterPage=(req,res)=>{\r\n    res.render('register', {people: [1,2,3]});\r\n}\r\n// 处理注册页面逻辑(post)\r\nexports.handleRegister=(req,res)=>{\r\n    const result = {status:1,message:\"注册成功\"}\r\n    database.findOne(\"account\",{username:req.body.username},(err,docs)=>{\r\n        if(!docs){\r\n            database.insertOne(\"account\",{username:req.body.username,password:req.body.username},(err,docs)=>{\r\n                if(err)\r\n                    console.log(err)\r\n            })\r\n        }else{\r\n            result.status=0;\r\n            result.message=\"账户已注册！\"\r\n        }\r\n        res.json(result);\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/controllers/accountController.js?");

/***/ }),

/***/ "./src/controllers/manageController.js":
/*!*********************************************!*\
  !*** ./src/controllers/manageController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\")\r\nconst database=__webpack_require__(/*! ../model/databaseManager */ \"./src/model/databaseManager.js\")\r\n\r\n// 获取学生列表\r\nexports.getStudentListPage=(req,res)=>{\r\n    // 获取当前页\r\n    const currentPageIndex=parseInt(req.query.currentPageIndex)||0;\r\n    // 每页的数据条数\r\n    const everyPageCount=parseInt(req.query.everyPageCount)||4;\r\n    // 获取搜索关键字\r\n    const keyword=req.query.keyword||\"\";\r\n\r\n    // 获取总条数\r\n    database.getCount(\"studentInfos\",{name:{$regex:keyword}},(err,count)=>{\r\n        // 跳过多少条数据\r\n        const skipCount=currentPageIndex*everyPageCount;\r\n        // 计算有多少页\r\n        const totalPage=count%everyPageCount>0?parseInt(count/everyPageCount)+1:count/everyPageCount\r\n        // 页数变成数组\r\n        const totalPageArray=[];\r\n        for(var i =0;i<totalPage;i++){\r\n            totalPageArray.push(i);\r\n          }\r\n          \r\n        // 返回当前页的结果\r\n        database.find(\"studentInfos\",{name:{$regex:keyword}},skipCount,everyPageCount,(err,docs)=>{\r\n            if(err){\r\n                console.log(err)\r\n            }\r\n            res.render('parent', {template:\"list\",list: docs,keyword,totalPage,totalPageArray,currentPageIndex});\r\n        })\r\n    })\r\n}\r\n// 获取新增学生页面\r\nexports.getAddStudentPage=(req,res)=>{\r\n    res.render('parent',{template:\"add\"})\r\n}\r\n// 增加学生信息\r\nexports.addStudentInfo=(req,res)=>{\r\n    const studentInfo={\r\n        ...req.body\r\n    }\r\n    database.insertOne(\"studentInfos\",studentInfo,(err,doc)=>{\r\n        res.setHeader(\"Content-Type\",\"text/html;charset=utf8;\")\r\n        if (doc!=null) {\r\n            res.end(\"<script>window.location.href='/studentmanager/list?everyPageCount=4&currentPageIndex=0'</script>\");\r\n        }else{\r\n            res.end(\"<script>alert('新增失败');</script>\")\r\n        }\r\n    })\r\n}\r\n// 获取编辑页面\r\nexports.getEditStudentPage=(req,res)=>{\r\n    const _id= req.params.id\r\n    database.findOne(\"studentInfos\",{_id:database.ObjectId(_id)},(err,doc)=>{\r\n        res.render('parent',{template:\"edit\",studentInfo:{...doc}})\r\n    })\r\n}\r\n// 编辑学生信息\r\nexports.editStudentInfo=(req,res)=>{\r\n    const _id= req.params.id;\r\n    req.body.age=parseInt(req.body.age)\r\n    const studentInfos={\r\n        ...req.body\r\n    }\r\n    database.updateOne(\"studentInfos\",{_id:database.ObjectId(_id)},{$set:studentInfos},(err,doc)=>{\r\n        res.setHeader(\"Content-Type\",\"text/html;charset=utf8;\")\r\n        if (doc!=null) {\r\n            res.end(\"<script>window.location.href='/studentmanager/list?everyPageCount=4&currentPageIndex=0';alert('保存成功');</script>\");\r\n        }else{\r\n            res.end(\"<script>alert('新增失败');</script>\")\r\n        }\r\n    })\r\n}\r\n// 删除学生信息\r\nexports.deleteStudentInfo=(req,res)=>{\r\n    const result={status:1,message:\"删除成功！\"}\r\n    const _id= req.params.id;\r\n    database.deleteOne(\"studentInfos\",{_id:database.ObjectId(_id)},(err,doc)=>{\r\n        if (!doc) {\r\n            result.status=0;\r\n            result.message=\"删除失败！\"\r\n        }\r\n        res.json(result)\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/controllers/manageController.js?");

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

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\")\r\nconst accountCtr = __webpack_require__(/*! ../controllers/accountController */ \"./src/controllers/accountController.js\")\r\n\r\n// 创建路由模块\r\nconst accountRouter=express.Router()\r\n// 获取登录页面\r\naccountRouter.get(\"/login\",accountCtr.getLoginPage)\r\n// 处理登录逻辑\r\naccountRouter.post(\"/login\",accountCtr.handleLogin)\r\n// 获取图片验证码\r\naccountRouter.get(\"/vcode\",accountCtr.getVcode)\r\n// 获取注册页面\r\naccountRouter.get(\"/register\",accountCtr.getRegisterPage)\r\n// 处理注册逻辑\r\naccountRouter.post(\"/register\",accountCtr.handleRegister)\r\n\r\nmodule.exports=accountRouter\n\n//# sourceURL=webpack:///./src/routers/accountRouter.js?");

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