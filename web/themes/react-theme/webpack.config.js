const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'app.[name].js',
    path: __dirname + '/dist'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}
