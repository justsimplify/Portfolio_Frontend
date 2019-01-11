const path = require('path');

module.exports = {
    entry: "./src/main",
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        child_process: 'empty',
        fs: 'empty'
    },
    module: {
        rules: [{
            test: /.ts$/,
            loader: "ts-loader"
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}