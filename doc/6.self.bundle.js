
  (function (modules) {
    let installedModules = {} //定义缓存对象
    let installedChunks = {
      main:0
    }
    // 当执行test.bundle.js时会调用这个重写的push
    function webpackJsonCallback([chunskIds,moreModules]){
      let resolve=[];
      for(let moduleId in moreModules){
        //将模块同步赋值到modules中一份
        modules[moduleId] = moreModules[moduleId]
      }
      for(let chunkId of chunskIds){
        resolve.push(installedChunks[chunkId][0])
      }
      while (resolve.length) {
        resolve.shift()()
      }
    }
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports
      }
      let module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
      }
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
      module.l = true
      return module.exports
    }
    __webpack_require__.e = function (chunkId) {
      let installedChunkData ;
      let promise = new Promise(function(resolve,reject){
        installedChunkData  = [resolve,reject]
      })
      installedChunkData.push(promise)
      installedChunks[chunkId] = installedChunkData
      let script = document.createElement('script')
      script.src = chunkId + '.bundle.js'
      document.head.appendChild(script)
      return promise
    }
    __webpack_require__.t = function(value,mode){ //value:./src/test.js
      //一开始这个value只是一个属性名，通过if(mode & 1) 返回值
      if(mode & 1) value = __webpack_require__(value) //这个时候再modules中寻找到这个value，因为在push的时候已经同步赋值到modules中一份了
      if(mode & 8) return value
      if(mode & 4 && value.__esModule){
        return value
      }
      var ns = Object.create(null)
      ns.__esModule = true
      ns.default = value
      if(mode & 0b0010){
        for(let key in value){
          ns[key] = value[key]
        }
      }
      return ns
    }
    let jsonArray =  window["webpackJsonp"] = []
    window["webpackJsonp"].push = webpackJsonCallback;
    debugger

    return __webpack_require__("./src/index.js");
  })
  ({

    "./src/index.js":

      (function (module, exports, __webpack_require__) {
        __webpack_require__.e("test")
          .then(__webpack_require__.t.bind(null, "./src/test.js", 7))
          .then((res) => { console.log(res) })
      })

  })