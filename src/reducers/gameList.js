import * as types from '../constants/ActionTypes'
//import { combineReducers } from 'redux'

function getLeagueFilter(list){
	let filter = {}
	list.forEach(item => {
		filter[item.league]=item.league
		filter[item.league+'act']= true
	})
	return filter
}

function activeALeagueFilter(oldFilter,name){

	oldFilter[name+'act'] = !oldFilter[name+'act']
	let filter = Object.assign({}, oldFilter, oldFilter[name+'act'] )
	return filter
}

const gameList = (state = {
	isFetching: false,
	items:[],
	leagueFilter:{}
}, action) => {
	switch (action.type) {
		case types.GETGAMELIST_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			})
		case types.GETGAMELIST_SUCCESS:
			return Object.assign({}, state, {
					isFetching: false,
					items: action.gameList,
					leagueFilter:(getLeagueFilter(action.gameList))
				}
			)
		case types.GETGAMELIST_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
			})
		case types.ACTIVE_A_FILTERS:
			return Object.assign({}, state, {
				leagueFilter:(activeALeagueFilter(state.leagueFilter,name))
			})
		default:
			return state
	}

}

/*如果想分开filter与gamelist，可以如下写法
const leagueFilter = (state = {}, action) => {
	switch (action.type) {
		case types.GETGAMELIST_SUCCESS:
			return getLeagueFilter(action.gameList)
		case types.ACTIVE_A_FILTERS:
			return {}

		default:
			return state
	}

}

export default combineReducers({
  gameList,
  leagueFilter
})
*/
export default gameList
