const webpack = require('webpack')
const options = require('./webpack.config')
/**
 * compoler就是编译器
 */
const compoler = webpack(options)
compoler.run((err,stats)=>{
    let resolve = JSON.stringify(stats.toJson({
        entries:true,
        chunks:true,
        module:true,
        assets:true
    }),null,2)
    console.log(
        resolve 
    );
})