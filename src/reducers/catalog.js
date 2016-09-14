import {
	INIT_CATALOG,
} from '../constants/ActionTypes'


const catalog = (state = [], action) => {
  switch (action.type) {
    case INIT_CATALOG:
      return action.catalog.map((item) => item)
    default:
      return state
  }
}
export default catalog
