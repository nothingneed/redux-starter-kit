
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.mid')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/src/index.html')
})
 var bodyParser = require('body-parser');

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

app.listen(port, function(error) {
    if (error) {
		console.error(error)
	} else {
		console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
	}
})