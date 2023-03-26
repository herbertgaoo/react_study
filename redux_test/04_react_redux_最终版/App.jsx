import React, { Component } from 'react'
import Count from './containers/Count'    // 引入容器组件
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 容器组件 */}
        <Count />
        <hr />
        <Person/>
      </div>
    )
  }
}
