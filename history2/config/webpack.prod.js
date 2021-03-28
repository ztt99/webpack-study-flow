const merge = require('webpack-merge')
const webpackConfig = require('./webpack.base')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports =merge(webpackConfig,{
    optimization:{
        minimizer:[new TerserWebpackPlugin({}),new OptimizeCssAssetsWebpackPlugin({})]
    }
})