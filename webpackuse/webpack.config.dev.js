// 自定义开发环境配置文件 关联到package.json中的dev脚本 使用方式 npm run dev
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