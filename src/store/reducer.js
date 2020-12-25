// 此处合并reducers
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'

const cReducer = combineReducers({
  recommend: recommendReducer, 
})

export default cReducer
