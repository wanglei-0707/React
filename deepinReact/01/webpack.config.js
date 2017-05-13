var path = require('path');

var config = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 7777
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src/css'),
                ],
                loader: 'style-loader!css-loader!sass-loader?sourceMap=true&sourceMapContents=true'
            }
        ]
    }
};

module.exports = config;
