  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ? //如果模块是es6
      function getDefault() { return module['default']; } : //返回module.default
      function getModuleExports() { return module; }; //否则返回module
    __webpack_require__.d(getter, 'a', getter); //给getter加一个a的属性，并返回getter
    return getter; //返回getter
  };

  ({

    "./src/index.js":

      (function (module, __webpack_exports__, __webpack_require__) {
        //将module.exports对象标记为es6
        __webpack_require__.r(__webpack_exports__);
        //注册./src/test.js的module模块，返回module.exports
        var _test__ = __webpack_require__("./src/test.js");
        var _test___default = __webpack_require__.n(_test__); //_test__不是es6，则直接返回getter
        console.log(_test___default.a, _test__["age"]);
      }),

    "./src/test.js":

      (function (module, exports) {
        module.exports = { name:'zs', age:'20'}  //commonJS返回module.exports   { name:'zs', age:'20'}
      })

  });