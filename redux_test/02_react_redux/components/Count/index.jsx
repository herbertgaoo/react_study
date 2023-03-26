import React, { Component } from 'react'

export default class Count extends Component {

  increment = () =>{
    this.props.increment(this.selectNumber.value*1)
  }
  decrement = () =>{
    this.props.decrement(this.selectNumber.value*1)
  }
  asyncIncrement = () =>{
    this.props.asyncIncrement(this.selectNumber.value*1, 500)
  }
  render() {
    const {count} = this.props
    return (
      <div>
        <h1>当前求和为：{count}</h1>
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
