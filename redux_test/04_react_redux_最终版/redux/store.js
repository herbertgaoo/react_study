// 引入createStore, 专门用于创建redux中最为核心的store
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
// 引入 redux-thunk用于支持异步action
import thunk from 'redux-thunk'
// 引入合并后的reducer
import allReducers from "./reducers"

export default createStore(allReducers, applyMiddleware(thunk))