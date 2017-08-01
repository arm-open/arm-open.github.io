const path = require('path');

module.exports = {
    entry: {
        app_js: ['./static/js/main.js', './static/js/menu.js', './static/js/stripe-button.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static', 'js'),
        publicPath: "http://0.0.0.0:5000/static",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                     'url-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    }
};