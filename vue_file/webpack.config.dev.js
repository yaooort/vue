// 自定义开发环境配置文件 关联到package.json中的dev脚本 使用方式 npm run dev
/*jshint esversion: 6 */
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口
    entry: {
        'main': './src/main.js'
    },
    // 导出
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                loader: 'url-loader?limit=40000'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env'], //处理es6 7 8关键字
                    plugins: ['transform-runtime'] //处理函数
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    plugins: [
        // 插件
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ],
    // 自动监听
    watch: true,
};