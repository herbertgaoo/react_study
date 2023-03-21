import React, { Component } from 'react'
// import qs from "qs"

const data = [
  {id:"001", content:"hello world1"},
  {id:"002", content:"hello world2"},
  {id:"003", content:"hello world3"}
]
export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 接收params参数
    // const {id, title} = this.props.match.params

    // 接收search参数
    // const {search} = this.props.location
    // const {id, title} = qs.parse(search.slice(1))

    // 接收state参数
    const {id, title} = this.props.location.state

    const result = data.find(e => e.id === id) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{result.content}</li>
      </ul>
    )
  }
}
