const path = require('path')

// Configuration options
module.exports = {

    mode: 'production',

    // Starting here...
    entry: './src/main.js',

    // Find all .js code and dependencies
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // Package code as defined here
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            }
        ]
    }

}
