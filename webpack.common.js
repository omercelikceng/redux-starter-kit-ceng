const path = require('path');
const publicPath = 'build';

module.exports = {    
    entry: ['./src/index.js'],
    output: {
        filename: 'ui-example.js',
        path: path.resolve(__dirname, publicPath),
		sourceMapFilename: 'ui-example.map'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
}