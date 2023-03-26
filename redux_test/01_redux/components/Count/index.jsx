import React, { Component } from 'react'
import store from '../../redux/store';
import {createIncrementAction, createDecrementAction, createAsyncIncrementAction} from '../../redux/count_action'

export default class Count extends Component {

  increment = () =>{
    store.dispatch(createIncrementAction(this.selectNumber.value * 1))
  }
  decrement = () =>{
    store.dispatch(createDecrementAction(this.selectNumber.value * 1))
  }
  asyncIncrement = () =>{
    store.dispatch(createAsyncIncrementAction(this.selectNumber.value * 1, 500))
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.asyncIncrement}>async +</button>&nbsp;
      </div>
    )
  }
}
