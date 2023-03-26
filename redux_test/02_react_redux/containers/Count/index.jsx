// 引入UI组件
import CountUI from "../../components/Count";
import {createIncrementAction, createDecrementAction, createAsyncIncrementAction} from "../../redux/count_action"

// 引入connect用于连接UI组件与redux
import {connect} from "react-redux"

/**
 * 返回一个对象用于传递satae
 * @param {*} state 
 * @returns 
 */
function mapStateToProps(state) {
  return {count:state}
}

/**
 * 返回一个对象用于传递操作state函数
 * @param {*} dispatch 
 * @returns 
 */
function mapDispatchToProps(dispatch) {
  return {
    increment: num => dispatch(createIncrementAction(num)),
    decrement: num => dispatch(createDecrementAction(num)),
    asyncIncrement: (num, timeout) => dispatch(createAsyncIncrementAction(num, timeout))
  }
}
/**
 * 使用connect(mapStateToProps, mapDispatchToProps)(UI组件)创建容器组件
 * connect第一次调用接收两个函数类型的参数
 * mapStateToProps: 传递给UI组件的状态值, 函数1的参数为state
 * mapDispatchToProps: 传递给UI组件操作状态的函数， 函数2的参数为dispatch
 */
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
