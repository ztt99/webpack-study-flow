(function (modules) { // webpackBootstrap
    // install a JSONP callback for chunk loading
    function webpackJsonpCallback(data) {
      debugger
  
      var chunkIds = data[0]; // ["test"]
      var moreModules = data[1]; // {"./src/test.js":(function(module, exports) { module.exports = {name:'zs',age:'20'}}) }
  
  
      // add "moreModules" to the modules object,
      // then flag all "chunkIds" as loaded and fire callback
      var moduleId, chunkId, i = 0, resolves = [];
      for (; i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
          resolves.push(installedChunks[chunkId][0]);
        }
        installedChunks[chunkId] = 0;
      }
      for (moduleId in moreModules) {
        if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
          modules[moduleId] = moreModules[moduleId];  //把新的模块放到modules中
        }
      }
      if (parentJsonpFunction) parentJsonpFunction(data);
  
      while (resolves.length) {
        resolves.shift()(); //执行所有的resolve方法
      }
  
    };
  
  
    // The module cache
    var installedModules = {};
  
    // object to store loaded and loading chunks 用来存放加载过的和加载中的代码块
    // undefined = chunk not loaded undefined表示未加载
    // null = chunk preloaded/prefetched null表示预加载或预获取
    // Promise = chunk loading 如果值是一个promise表示代码块正在加载中
    // 0 = chunk loaded 0表示已经回来了，加载成功
    var installedChunks = {
      "main": 0
    };
  
  
  
    // script path function
    function jsonpScriptSrc(chunkId) {
      //__webpack_require__.p = ''
      return __webpack_require__.p + "" + chunkId + ".bundle.js" //test.bundle.js
    }
  
    // The require function
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
  
      // Execute the module function
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  
      // Flag the module as loaded
      module.l = true;
  
      // Return the exports of the module
      return module.exports;
    }
  
    // This file contains only the entry chunk. //这个文件只包含入口代码块
    // The chunk loading function for additional chunks // 这个e方法是用来加载额外代码块
    __webpack_require__.e = function requireEnsure(chunkId) { //test
      var promises = [];  //因为加载代码块是异步的，所以要声明一个promise 的空数组
  
      // JSONP chunk loading for javascript
  
      var installedChunkData = installedChunks[chunkId]; //test 去installedChunks中找，是否是安装过的代码块
      if (installedChunkData !== 0) { // 0 means "already installed".
  
        // a Promise means "currently loading".
        if (installedChunkData) {
          promises.push(installedChunkData[2]);
        } else {
          // setup Promise in chunk cache 如果没有值，则包装为promise
          var promise = new Promise(function (resolve, reject) {
            installedChunkData = installedChunks[chunkId] = [resolve, reject];
          });
          promises.push(installedChunkData[2] = promise); //此时promises中  [ promise]  installedChunkData [resolve, reject,promise]
  
          // start chunk loading
          var script = document.createElement('script');
          var onScriptComplete;
  
          script.charset = 'utf-8';
          script.timeout = 120;
          if (__webpack_require__.nc) {
            script.setAttribute("nonce", __webpack_require__.nc);
          }
          //src = test.bundle.js
          script.src = jsonpScriptSrc(chunkId); //chunkId test
  
          // create error before stack unwound to get useful stacktrace later
          var error = new Error();
          onScriptComplete = function (event) {
            // avoid mem leaks in IE.
            script.onerror = script.onload = null;
            clearTimeout(timeout);
            var chunk = installedChunks[chunkId];
            if (chunk !== 0) {
              if (chunk) {
                var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                var realSrc = event && event.target && event.target.src;
                error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                error.name = 'ChunkLoadError';
                error.type = errorType;
                error.request = realSrc;
                chunk[1](error);
              }
              installedChunks[chunkId] = undefined;
            }
          };
          var timeout = setTimeout(function () {
            onScriptComplete({ type: 'timeout', target: script });
          }, 120000);
          script.onerror = script.onload = onScriptComplete;
          document.head.appendChild(script);
        }
      }
      return Promise.all(promises);
    };
  
    // expose the modules object (__webpack_modules__)
    __webpack_require__.m = modules;
  
    // expose the module cache
    __webpack_require__.c = installedModules;
  
    // define getter function for harmony exports
    __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, { enumerable: true, get: getter });
      }
    };
  
    // define __esModule on exports
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
    // __webpack_require__.t.bind(null,"./src/test.js", 7))
    __webpack_require__.t = function (value, mode) {
      if (mode & 1) value = __webpack_require__(value);
      if (mode & 8) return value;
      if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      var ns = Object.create(null);
      __webpack_require__.r(ns);
      Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
      return ns;
    };
  
    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ?
        function getDefault() { return module['default']; } :
        function getModuleExports() { return module; };
      __webpack_require__.d(getter, 'a', getter);
      return getter;
    };
  
    // Object.prototype.hasOwnProperty.call
    __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  
    // __webpack_public_path__
    __webpack_require__.p = "";
  
    // on error function for async loading
    __webpack_require__.oe = function (err) { console.error(err); throw err; };
  
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
  debugger
  
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
  
    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = "./src/index.js");
  })
    ({
  
  /***/ "./src/index.js":
  /***/ (function (module, exports, __webpack_require__) {
  
          btn.addEventListener('click',(e)=>{
             __webpack_require__.e("test").then(
               __webpack_require__.t.bind(null,"./src/test.js", 7)
              //  0111= 7
              //  0001: 说明value参数是模块ID
              //  0010: 说明吧value上的属性合并到ns对象上
              //  0100：说明value已经是一个es module，可以直接返回
               ).then(()=>{console.log(1); })});
  
  })
  
    });