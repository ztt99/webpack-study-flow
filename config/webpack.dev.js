const merge = require('webpack-merge')
const webpackConfig = require('./webpack.base')
const webpack  = require('webpack')
module.exports = merge(webpackConfig,{
    mode:'development',
    devServer:{
        open:true,
        port:5000,
        compress:true,
        contentBase:'./src'
    },
    devtool:'cheap-module-eval-source-map',
    plugins:[
        new webpack.DefinePlugin({
            DEV:'true'
        })
    ]
})