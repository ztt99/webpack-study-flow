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

file-loader:解析文件
url-loader:解析文件(比file-loader更高级，在file-loader的基础上，小的图片会转为base64,base64会比原图大30%)


### 指定图片打包到根目录

```js
{
    test:/\.(gif)$/,
    use:{
        loader:'url-loader',
        options:{
            limit:5 * 1024,
            outputPath:'images',
            name:'[name]-[hash:4].[ext]'
        }
    }
}
```

### babel

@babel/core : 核心包
@babel/preset-env : 语法包(包含大部分ES6)

### 问题

webpack自动下载为5.0以上版本，cli为4.0以上版本，使用webpack-dev-server会报错，需要webpack，webpack-cli降级处理