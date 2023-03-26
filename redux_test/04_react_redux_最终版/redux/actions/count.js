/**
 * 该文件专门为Count组件生成action组件
 * action-object 同步
 * action-function 异步(非必需)
 */

import { INCREMENT, DECREMENT } from '../constant'

export const incrementAction = data => ({type: INCREMENT, data})
export const decrementAction = data => ({type: DECREMENT, data})

/**
 * 异步action，返回值为function
 * 异步action中一般都会调用同步action
 * @param {*} data 
 * @param {*} timeout 
 * @returns 
 */
export const asyncIncrementAction = (data, timeout) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementAction(data))
    }, timeout);
  }
}