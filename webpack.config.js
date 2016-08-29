var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',  //让bundle.js可以在浏览器的debug模式下映射到原有的模块
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',//资源服务器地址
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    publicPath: "http://127.0.0.1:8080/static/dist/",
    path: './static/dist/',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"'    //部署时使用production
    }),
    new webpack.HotModuleReplacementPlugin()

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
