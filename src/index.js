//import 'babel-polyfill'				//使用wabpack一般无需使用此填缝工具，否则可使用此模块让浏览器支持ES6，ES7
import React from 'react'
import ReactDOM from 'react-dom' //14版本以后，reactDom已从React中分离
import { Provider } from 'react-redux' //Provider将redux数据结构与react绑定
import GameDetail from 'GameDetail'
import App from 'App'
import Game from 'Game'

import configureStore from './store/configureStore'
import {
	getGameCatalog
} from './actions'
import _catalog from './api/catalog.json' //模拟同构数据

import {
	Router,
	Route,
	IndexRoute,
	browserHistory,
	hashHistory
} from 'react-router'

import {syncHistoryWithStore} from 'react-router-redux'



	
const store = configureStore() //{catalog:_catalog}//配置仓库，传入的同构数据如果使用combineReducers处理，则必须是带同样key的普通对象
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(getGameCatalog(_catalog)) //模拟第一次数据请求
const rootEl = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Game}/>
			<Route path="/gameDetail/" component={GameDetail}/>
		</Route>
		</Router>
	</Provider>,
	rootEl

)