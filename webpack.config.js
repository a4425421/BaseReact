/**
 * Created by Hao on 2017/3/3.
 */


/**
 * 参考http://www.jianshu.com/p/42e11515c10f
 */

module.exports = {
    devtool: 'source-map',
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },


    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015','react','stage-1']  // stage-1 支持箭头函数
                }
            }
        ]
    },



}




