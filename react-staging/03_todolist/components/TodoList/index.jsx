import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import './index.css'

export default class List extends Component {
  render() {
    let {todoArr, changeDone, delTodo} = this.props
    return (
      <div className='todo-list'>
        {
          todoArr.map(item => {
            return <TodoItem item={item} key={item.id} changeDone={changeDone} delTodo={delTodo}/>
          })
        }
      </div>
    )
  }
}
