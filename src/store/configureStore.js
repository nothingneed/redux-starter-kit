import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

//这里配置全局store   //preloadedState 可用于前后端同构渲染
export default function configureStore(preloadedState) {
	//定义中间件，环境变量可使用nodejs赋值，也可使用webpack的server模式赋值
  const middleware = process.env.NODE_ENV === 'production' ?
		[thunk] :
		[thunk, logger()]

  console.log(process.env.NODE_ENV)

  const store = createStore(rootReducer, preloadedState, applyMiddleware(...middleware))

  return store
}

