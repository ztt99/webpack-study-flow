const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
        other: './src/other.js'
    },
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            //默认async：只对异步加载的模块进行拆分；
            chunks: 'all',
            minSize: 30000, //模块最小大于30kb才会拆分
            minChunks: 1, //模块最小被引用一次才拆分
            maxAsyncRequests: 5, //异步加载时同时发送的请求数量最大不能超过3
            maxInitialRequests: 3, //页面初始化时同时发送的请求数量最大不能超过3
            automaticNameDelimiter: '~', //默认的连接符
            name: true,//拆分的chunk名，设为true标识根据模块名和CacheGroup的key来自动生成，使用上面链接符连接
            cacheGroups: { //缓存组配置，上面配置读取完成后进行拆分，如果需要把多个模块拆分到一个文件，就需要缓存，所以命名为缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/,//
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true //如果主入口引入了两个模块a和b，a中也引用了b，那么就会直接复用，无需引用2次
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5 * 1024,
                        outputPath: 'images',
                        name: '[name]-[hash:4].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    // options:{
                    //     presets:['@babel/env'], //语法预设
                    //     plugins:['@babel/plugin-proposal-class-properties'] //使用更高级的语法
                    // }
                }
            },
            // {
            //     test:/\.(html|htm)$/i,
            //     loader:'html-withimg-loader'
            // },

        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            // chunks:['index'],
        }),
        // new HtmlWebpackPlugin({
        //     filename:'other.html',
        //     template:'./src/other.html',
        //     chunks:['other']
        // }),
        new webpack.BannerPlugin('张婷'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]


}