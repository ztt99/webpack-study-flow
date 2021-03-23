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