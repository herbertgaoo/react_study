// 引入createStore, 专门用于创建redux中最为核心的store
import {legacy_createStore as createStore} from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer)