const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BannerPlugin = require('webpack').BannerPlugin

module.exports = {
    entry:{
        index:'./src/index.js',
        other:'./src/other.js'
    },
    output:{
        path:path.join(__dirname,'./dist/'),
        filename:'[name].js'
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
            },
            {
                test:/\.(html|htm)$/i,
                loader:'html-withimg-loader'
            }
        ]
    },
    plugins:[
        // new CopyWebpackPlugin([
        //     {
        //         from:path.resolve('assetes'),
        //         to:'assetes'
        //     }
        // ]),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html',
            chunks:['index'],
        }),
        new HtmlWebpackPlugin({
            filename:'other.html',
            template:'./src/other.html',
            chunks:['other']
        }),
        new BannerPlugin('张婷')
    ]
    
}