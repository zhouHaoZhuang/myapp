const path = require('path')

module.exports = {
    devtool: false,
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node' // 这是最关键的
}
