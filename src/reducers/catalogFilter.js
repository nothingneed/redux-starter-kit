import {
	SWITCH_CATALOG
} from '../constants/ActionTypes'

const catalogFilter = (state = 0, action) => {

	switch (action.type) {
	case SWITCH_CATALOG:
			return action.id
		default:
			return state
	}

}
export default catalogFilter