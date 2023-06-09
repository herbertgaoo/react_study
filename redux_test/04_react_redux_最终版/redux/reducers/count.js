/**
 * 该文件是用于创建一个为count组件的服务的reducer
 * 接收两个参数，之前状态、动作对象
 */
import { INCREMENT, DECREMENT } from '../constant'

const initState = 0
export default function countReducer (prevState=initState, action) {
  const {type, data} = action
  switch (type) {
    case INCREMENT:
      return prevState + data
    case DECREMENT:
      return prevState - data
    default:
      return prevState
  }
}