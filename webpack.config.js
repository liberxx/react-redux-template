var path = require('path')
var webpack = require('webpack')
var port = '3000'
require('babel-polyfill');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.tsx',
        `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr&reload=true`
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'css', 'scss']
    },
    module: {
        loaders: [
            {
                test: /\.(tsx|ts)$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['react'],
                                ['es2015', { "modules": false}]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                loaders: [  
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
