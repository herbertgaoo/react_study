// 引入combineReducers 用于合并所有的reducer
import {combineReducers} from 'redux'
// 引入为Count组件处理的reduce
import count from './count'
// 引入Person组件的reduce
import personArr from "./person"

// 合并所有的reducer
export default combineReducers({
  count,
  personArr
})