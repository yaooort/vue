
// 使用方式直接调用webpack ./node_modules/.bin/webpack
module.exports = {
    // 入口
    entry: {
        'main': './app/main.js'
    },
    // 导出
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    // 自动监听
    watch: true,
}