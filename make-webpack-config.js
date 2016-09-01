var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");//打包css为一个文件
var HtmlWebpackPlugin = require('html-webpack-plugin'); // Html文件处理

var ROOT_PATH = path.resolve(__dirname)
var SRC_PATH = path.join(ROOT_PATH, 'src')
var DIST_PATH = path.join(ROOT_PATH, 'dist')
var TEM_PATH = path.join(ROOT_PATH, 'templates')


module.exports = function(options) {

  var port = options.port ? options.port : 3001
	var entry = {
		 main : [path.join(SRC_PATH, 'index')],
    };
	var module = {
    loaders: [{
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: SRC_PATH
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader',
           'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }, {
        test: /\.json$/,
        loaders: ['json'],
        include: SRC_PATH
      }
    ]
  }

	var additionalLoaders = [
	];
	var alias = {
	};
	var aliasLoader = {
	};
	var externals = [
	];
	var modulesDirectories = ['node_modules', 'components', 'src', 'containers'];
	var extensions = ["", ".js", ".jsx"];

	var publicPath = options.devServer ?
		"http://localhost:" + port + "/dist/":
		"/dist/";

	var output = {
		path: DIST_PATH,
		publicPath: publicPath,
		filename: "[name].js" + (options.longTermCaching ? "?[chunkhash:8]" : ""),
		chunkFilename: (options.devServer ? "[id].js" : "[name].js") + (options.longTermCaching? "?[chunkhash:8]" : ""),
		sourceMapFilename: "debugging/[file].map"
	};

	 var plugins = [
         new HtmlWebpackPlugin({
            title: 'Redux-Example',
            template: path.join(TEM_PATH, 'index.html'),
            filename: 'index.html',
            inject: 'body',
            favicon: 'favicon.ico',
          }),
	// 	new webpack.PrefetchPlugin("react"),        //预取插件，据说可以加快打包，然而并没有，也许是姿势不对
	// 	new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
	 ];

	if(options.commonsChunk) { // 分析以下模块的共用代码, 单独打一个包到common.js
		plugins.push(new webpack.optimize.CommonsChunkPlugin("commons", "commons.js" + (options.longTermCaching ? "?[chunkhash:8]" : "")));
	}

	 if(options.separateStylesheet) {
	 	plugins.push(new ExtractTextPlugin("[name].css" + (options.longTermCaching ? "?[contenthash:8]" : "")));
	 }else{
    plugins.push(new ExtractTextPlugin('style.css' + (options.longTermCaching ? "?[contenthash:8]" : ""), { allChunks: true }));
   }

	if(options.minimize ) {  //优化打包尺寸
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				compressor: {
					warnings: false
				}
			}),
			new webpack.optimize.DedupePlugin()
		);
	}
	if(options.minimize) {
		plugins.push(
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production")
				}
			}),
			new webpack.NoErrorsPlugin()
		);
	}
	return {
		entry: entry,
		output: output,
		target: "web",
		module: module,
		devtool: options.devtool,
		debug: options.debug,
		resolveLoader: {
			root: path.join(__dirname, "node_modules"),
			alias: aliasLoader
		},
		externals: externals,
		resolve: {
			root: ROOT_PATH,
			modulesDirectories: modulesDirectories,
			extensions: extensions,
			alias: alias
		},
		plugins: plugins,
	};
};
