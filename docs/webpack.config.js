const isProd = (process.env.NODE_ENV === 'production');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        filename: './bundle.js'
    },
    plugins:function () {
        const plugins = [];

        plugins.push(new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }));

        if (isProd) {
            plugins.push(new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                },
                sourceMap: false
            }));
        }

        return plugins;
    }(),
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            components: path.join(__dirname, 'components'),
            'react-building-blocks': path.join(__dirname, '../src')
        }
    },
    module: {
        preLoaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                include: /components/,
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: /src/,
                exclude: /node_modules/
            }
        ]
    }
};
