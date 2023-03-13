import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  changeHandler = (id) => {
    return (e)=> {
      this.props.changeDone(id, e.target.checked)
    }
  }
  delHandler = (id) => {
    return (e)=> {
      if(window.confirm("确定删除吗？")) {
        this.props.delTodo(id)
      }
    }
  }
  render() {
    let {item} = this.props
    return (
      <div className='todo-list-item'>
        <label htmlFor="">
          <input className='item-done' type="checkbox" checked={item.done} onChange={this.changeHandler(item.id)}/>
          <span>&nbsp;{item.title}</span>
        </label>
        <button className='item-del' onClick={this.delHandler(item.id)}>删除</button>
      </div>
    )
  }
}
