// 引入createStore, 专门用于创建redux中最为核心的store
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import countReducer from './count_reducer'
// 引入 redux-thunk用于支持异步action
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))