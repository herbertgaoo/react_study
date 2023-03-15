import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getData= () => {
    axios.get("students").then(
      respone => {console.log(respone);},
      error => {}
    )
  }
  getCarData= () => {
    axios.get("car").then(
      respone => {console.log(respone);},
      error => {}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>获取数据</button>
        <button onClick={this.getCarData}>获取汽车</button>
      </div>
    )
  }
}
