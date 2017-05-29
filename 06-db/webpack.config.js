const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = [
    new CopyWebpackPlugin([
        {
            from: 'node_modules/todomvc-app-css/index.css', to: 'vendor/todomvc-app-css/index.css'
        },
        {
            from: 'node_modules/todomvc-common/base.js', to: 'vendor/todomvc-common/base.js'
        },
        {
            from: 'node_modules/todomvc-common/base.css', to: 'vendor/todomvc-common/base.css'
        }
    ]),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html')
    })
]

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        port: 3000
    },

    entry: {
        app: path.join(__dirname, './src/app.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            // JavaScript / ES6
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins
}