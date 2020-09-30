var path = require('path');

module.exports = {
    entry:  {
        app: path.resolve('./') + '/index.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: "[name].js"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                      ["prismjs", {
                          "languages": ["python"]
                      }]
                    ]
                  }
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }
};
