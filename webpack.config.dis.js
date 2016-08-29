var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './index'
    ],
  output: {
    path: './static/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'    
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
      output: {
          comments: false,
      },

    }),

  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      },

      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
