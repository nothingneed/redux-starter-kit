import { createStore ,applyMiddleware} from 'redux'
import rootReducer from '../reducers'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

//这里配置全局store   //preloadedState 可用于前后端同构渲染
export default function configureStore(preloadedState) {
	//定义中间件，环境变量可使用nodejs赋值，也可使用webpack的server模式赋值
	const middleware = process.env.NODE_ENV === 'production' ?
		[thunk] :
		[thunk, logger()]

	const store = createStore(rootReducer, preloadedState, applyMiddleware(...middleware))

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default
			store.replaceReducer(nextReducer)
		})
	}


	return store
}

