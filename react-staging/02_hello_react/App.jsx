// 创建外科组件
import React, {Component} from "react"
import Hi from "./components/Hi"
import Welcome from "./components/Welcome"

// 创建并暴露APP组件
export default class App extends Component {
  render () {
    return (
      <div>
        <Hi />
        <Welcome/>
      </div>
    )
  }
}