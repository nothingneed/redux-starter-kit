
var request = require('request')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var app = new (require('express'))()
var serverPort = 3000


var config = require('./webpack-hot-dev-server.config')
var webserverPort = config.webserverPort
config.entry.main.unshift("webpack-dev-server/client?http://0.0.0.0:"+webserverPort+"/", "webpack/hot/dev-server");
config.plugins.push( new webpack.HotModuleReplacementPlugin())

var entryHtml
console.log('***********************--webpack.config--***************************')
console.log(config)
console.log('***********************--webpack.config--***************************')
var compiler = webpack(config)
new WebpackDevServer(compiler, {
  noInfo: true,
	publicPath: config.output.publicPath,
	hot: true,
  stats:{
  	colors: true,
    }
   }).listen(webserverPort, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err)
  }
  request('http://localhost:'+ webserverPort + '/dist/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
console.log('***********************--dynamic index.html--***************************')
     console.log(body)
console.log('***********************--dynamic index.html--***************************')
     entryHtml = body
    }
  })
  console.log('webpack served at http://localhost:'+ webserverPort + '/')
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

