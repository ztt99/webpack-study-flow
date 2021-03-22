### 安装

```js
npm i webpack webpack-cli -D
```

### package.json

> 指定配置文件

```js
--config webpack.config.js  使用特定的配置文件
--watch 启动监听
--contentBase src 设置内容根目录
--open 自动打开浏览器
--port 指定端口
--hot 热模块更新
--compress 开启压缩
```

### wabpck.config.js

```js
obj.watch = true //启动watch

```

> webpack-dev-server

将打包的文件放到内存中，会自动去找根目录下的index.html,如果不想把index放在根目录下，需要设置

> 插件

html-webpack-plugin
- 打包的html在内存中

> loader

css-loader:解析css文件
style-loader:将解析的css加入到页面中
less-loader:将less转为css


### 问题

webpack自动下载为5.0以上版本，cli为4.0以上版本，使用webpack-dev-server会报错，需要webpack，webpack-cli降级处理