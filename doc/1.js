(function (modules) { // webpackBootstrap
    // The module cache 注册模块
    var installedModules = {};

    // The require function 自己写一个require
    function __webpack_require__(moduleId) {

        // Check if module is in cache
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        // Create a new module (and put it into the cache)
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        // Execute the module function 执行入口文件对应的的函数
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag the module as loaded
        module.l = true;

        // Return the exports of the module
        return module.exports;
    }


    return __webpack_require__("./src/index.js"); //入口文件
})
    ({

/***/ "./src/index.js":
/***/ (function (module, exports, __webpack_require__) {
                eval("const test = __webpack_require__(/*! ./test.js */ \"./src/test.js\")\n\n//# sourceURL=webpack:///./src/index.js?");
            }),

/***/ "./src/test.js":
/***/ (function (module, exports) {
                eval("module.exports = {\r\n    name:1\r\n}\n\n//# sourceURL=webpack:///./src/test.js?");

            })

    });