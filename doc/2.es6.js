/**
 * 
 * @param {*} exports 
 * es6导出 common导入
 */

// define __esModule on exports 标记es6导出
__webpack_require__.r = function(exports) {
    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        // 告诉导出的模块的类型是Module
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    // 设置__esModule属性，告诉是es6模块
    Object.defineProperty(exports, '__esModule', { value: true });
};

// Object.prototype.hasOwnProperty.call 判断是否有属性在这个对象上
__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };


// define getter function for harmony exports
__webpack_require__.d = function(exports, name, getter) {
    if(!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
};



__webpack_require__.r(__webpack_exports__)
__webpack_require__.d(
    __webpack_exports__, 'name', function() { return name; });
    const name = 'zs';
    __webpack_exports__["default"] = ({   name:122});