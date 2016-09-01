
var request = require('request')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var app = new (require('express'))()
var serverPort = 3000
var webpackPort = 3001

var config = require('./webpack-hot-dev-server.config')
config.entry.main.unshift("webpack-dev-server/client?http://localhost:"+webpackPort+"/", "webpack/hot/dev-server");
config.plugins.push( new webpack.HotModuleReplacementPlugin())

var entryHtml
console.log(config)
var compiler = webpack(config)
new WebpackDevServer(compiler, {
  noInfo: false,
	publicPath: config.output.publicPath,
	hot: true,
	colors: true
   }).listen(webpackPort, 'localhost', function (err, result) {
  if (err) {
    return console.log(err)
  }
  request('http://localhost:'+ webpackPort + '/dist/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
     console.log(body)
     entryHtml = body
    }
  })
  console.log('webpack served at http://localhost:'+ webpackPort + '/')
})


app.get('/', function(req, res) {
  res.send(entryHtml)
//	res.sendFile(__dirname + '/index.html')
})

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/getGameList', function(req, res) { //这里模拟一个真实的应答服务器
	console.info(req.query)
	var startTime = new Date().getTime()
    while (new Date().getTime() < startTime + 1000)
	var game = require('./src/api')
	res.send(game[req.query.id])
})

app.post('/test', function(req, res) {
    console.log(req.query)
    console.log(req.body)
})

app.listen(serverPort, function(error) {
    if (error) {
		console.error(error)
	} else {
		console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', serverPort, serverPort)
	}
})

