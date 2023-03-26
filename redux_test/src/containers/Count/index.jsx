import React, { Component } from "react";
import {
  incrementAction, decrementAction, asyncIncrementAction
} from "../../redux/actions/count";

// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

/**
 * 定义UI组件
 */
class Count extends Component {
  increment = () => {
    this.props.incrementAction(this.selectNumber.value * 1);
  };
  decrement = () => {
    this.props.decrementAction(this.selectNumber.value * 1);
  };
  asyncIncrement = () => {
    this.props.asyncIncrementAction(this.selectNumber.value * 1, 500);
  };
  render() {
    const { count, numbers } = this.props;
    return (
      <div>
        <h1>
          当前求和为：{count}, 下方总人数为：{numbers}
        </h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.asyncIncrement}>async +</button>&nbsp;
      </div>
    );
  }
}

/**
 * 容器组件
 * 使用connect(mapStateToProps, mapDispatchToProps)(UI组件)创建容器组件
 * connect第一次调用接收两个函数类型的参数
 * mapStateToProps: 传递给UI组件的状态值, 函数1的参数为state
 * mapDispatchToProps: 传递给UI组件操作状态的函数， 函数2的参数为dispatch
 */
export default connect(
  (state) => ({
    count: state.count,
    numbers: state.personArr.length,
  }),

  // mapDispatchToProps一般写法
  // (dispatch) => ({
  //   increment: (num) => dispatch(createIncrementAction(num)),
  //   decrement: (num) => dispatch(createDecrementAction(num)),
  //   asyncIncrement: (num, timeout) => dispatch(createAsyncIncrementAction(num, timeout)),
  // })
  // mapDispatchToProps简写 react-redux自动分发
  {
    incrementAction,
    decrementAction,
    asyncIncrementAction
  }
)(Count);
