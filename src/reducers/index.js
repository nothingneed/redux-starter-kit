import { combineReducers } from 'redux'
import catalog from './catalog.js'
import catalogFilter from './catalogFilter.js'
import gameList from './gameList.js'
import {
	routerReducer
} from 'react-router-redux'


const rootReducer = combineReducers({
  catalog,
  catalogFilter,
  gameList,
  routing: routerReducer
})



export default rootReducer
