const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'./dist/'),
        filename:'bundle.js'
    },
    mode:'development',
    // watch:true, //启动监听
    devServer:{
        open:true,
        port:5000,
        compress:true,
        contentBase:'./src'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
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
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/env'], //语法预设
                        plugins:['@babel/plugin-proposal-class-properties'] //使用更高级的语法
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ]
    
}