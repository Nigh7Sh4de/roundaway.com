var webpack = require('webpack');

module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'react-hmre', 'stage-2']
                }
            },
            // { test: /\.css$/, loaders: ['style', 'css'], exclude: /node_modules/ },
            // { test: /\.scss$/, loaders: ['style', 'css', 'sass'], exclude: /node_modules/ },
            // { test: /\.png$/, loader: "url-loader?limit=100000", exclude: /node_modules/ },
            // { test: /\.jpg$/, loader: "url-loader?limit=100000", exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};