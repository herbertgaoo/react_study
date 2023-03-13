import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  keyHandler = (event) => {
    if(event.keyCode !== 13) return;
    if(event.target.value.length > 0) {
      let newTodoObj = {id: nanoid(6), title: event.target.value, done: false}
      this.props.addTodo(newTodoObj)
      event.target.value = ""
    } else {
      alert("请输入内容！")
    }
  }
  render() {
    return (
      <div className='todo-header'>
        <input className='todo-input' type="text" placeholder='请输入你的任务，按回车键确认' onKeyUp={this.keyHandler}/>
      </div>
    )
  }
}
