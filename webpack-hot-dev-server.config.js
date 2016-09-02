module.exports = require("./make-webpack-config")({
	devServer: true,
	hotComponents: true,
	devtool: "cheap-module-eval-source-map",
	debug: true,
  commonsChunk: true,

});
