const path = require('path')
const fs = require('fs')
class Compiler {
    constructor(config){
        this.config = config
    }
    run(){
        let entries  = [] //放所有的入口 默认情况下一个入口会对应一个代码块chunks
        let modules = []  //放所有的模块
        let chunks = []
        let assets = {}   //key是文件名，值是文件内容
        let files =[] //元素都是文件名，files = Object.keys(assets)
        // 5.确定入口，根据配置中的entry找出所有的入口文件
        let entry = path.join(this.config.context,this.config.entry)
        // 编译模块：从吐口文件出发，调用所有配置的Loader堆模块进行转译
        entries.push(entry)
        // 1. 先读取此模块的内容
        let entryContent = fs.readFileSync(entry,'utf-8')
        let entrySource = babelLoader(entryContent)
        let entryModule = {id:'./src/index.js',source:entrySource,name:'main'}
        modules.push(entryModule)
        let cssEntry = path.join(this.config.context,'./src/index.css')
        let cssContent = fs.readFileSync(cssEntry,'utf-8')
        let cssSource = cssLoader(cssContent)
        let cssModule = {id:'./src/index.css',source:cssSource,name:'main'}
        modules.push(cssModule)
        // 6.输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk
        let chunk = {name:'main',modules:[entryModule,cssModule]}
        chunks.push(chunk)
        // 7.再把每个chunk转换成一个单独的文件加入到输出列表，这步可以修改输出内容的最后机会
        for(let chunk of chunks){
            assets[chunk.name + '.js'] = '"我是文件内容"'
        }
        files = Object.keys(assets) //写入硬盘的文件名数组
        for(let key in assets){
            let filePath = path.join(this.config.output.path,key)
            fs.writeFileSync(filePath,assets[key])
        }
    }
}
function babelLoader(source){
    return '编译完成的 require("./src/index.css")'
}
function cssLoader(source){
    return '编译完成的css'
}
// 1. 从配置文件和shell语句中读取与合并参数，得出最终的参数
const options = require('./webpack.config.js')

// 2. 开始编译：用上一步得到的参数初始化Compiler对象
const compiler = new Compiler(options)

// 3. 加载所有的配置的插件
for(let plugin of options.plugins){
    plugin.apply(compiler)
}
// 4.执行compiler的run方法开始编译
compiler.run()