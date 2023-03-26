import {ADD_PERSON} from '../constant'

// 初始化人员列表状态
const initState = [{id:'001', name: 'tom', age: 18}]
export default function personReducer(prevState=initState, action) {
  const {type, data} = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...prevState]
    default:
      return prevState
  }
}