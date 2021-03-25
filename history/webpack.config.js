const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

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
            },
            // {
            //     // require.resolve用于解析jquery模块的绝对路径
            //     test:require.resolve('jquery'),
            //     use:{
            //         loader:'expose-loader',
            //         options:'$'
            //     }
            // }

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
        new webpack.BannerPlugin('张婷'),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        })
    ]
    
}