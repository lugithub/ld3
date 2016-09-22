module.exports = {
    entry: './public/entry.js',
    output: {
        path: '.',
        filename: './public/bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
