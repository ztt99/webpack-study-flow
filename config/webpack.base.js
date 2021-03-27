const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry:{
        index:'./src/index.js',
        other:'./src/other.js'
    },
    output:{
        path:path.join(__dirname,'../dist/'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
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
            // {
            //     test:/\.(html|htm)$/i,
            //     loader:'html-withimg-loader'
            // },

        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
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
    ],
  
    
}