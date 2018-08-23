let config = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: __dirname + '/',
        filename: 'transpiled.js'
    },
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};

module.exports = config;