  // mode是一个二进制数
  // 
  // __webpack_require__.t.bind(null,"./src/test.js", 7))
  __webpack_require__.t = function (value, mode) {
    // 如果mode&1 为true那么value是一个模块ID，可以直接加在
    if (mode & 1) value = __webpack_require__(value);
    // 和require方法效果是一样的
    if (mode & 8) return value;
    // value可以直接返回
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    // 强行包装为ES6模块  ns namespeced
    __webpack_require__.r(ns); //在ns上加_esModule = true
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    // 如果mode&2是true，那么合并所有value到ns对象上
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    return ns;
  };

console.log((1).toString(2).padStart(4,'0'));//0001
console.log((2).toString(2).padStart(4,'0'));//0010
console.log((4).toString(2).padStart(4,'0'));//0100
console.log((8).toString(2).padStart(4,'0'));//1000