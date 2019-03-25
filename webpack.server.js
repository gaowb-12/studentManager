const path = require("path")
const nodeExternals = require("webpack-node-externals")//忽略node_modules里面的模块，不进行打包
const merge = require("webpack-merge")//合并配置文件
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require("./webpack.base")
const servercongig={
    target:"node",//告诉webpack打包的是服务端的代码，一些node内置模块不需要打包
    mode:"development",//指定环境
    entry:"./main.js",//入口
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    externals:[
        nodeExternals()
    ],
    // 避免打包之后__dirname跟__filename错误的问题
    node: {
        __filename: true,
        __dirname: true
    }
    // plugins:[
    //    new CopyWebpackPlugin(
    //        [{ from: 'statics', to: 'src/statics' }],
    //        [{ from: 'views', to: 'src/views' }]
    //     )
    // ]
}
module.exports=merge(config,servercongig)