const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const SelfPlugin = require('./plugins/SelfPlugin')
module.exports = {
    entry:'./src/index.js',
    context:process.cwd(), //当前的上下文
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:'development',
    plugins:[
        new SelfPlugin()
        // new HtmlWebpackPlugin({
        //     template:'./src/index.html',
        //     filename:'index.html'
        // })
    ]
}