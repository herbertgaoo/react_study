import React, { Component } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import './App.css'

export default class App extends Component {
  state = {
    todoArr: [
      {id:"001", title: "吃饭", done: false},
      {id:"002", title: "睡觉", done: true},
      {id:"003", title: "看书", done: false},
    ]
  }
  
  addTodo = (todoObj) => {
    const {todoArr} = this.state
    const newTodoArr = [todoObj, ...todoArr]
    this.setState({todoArr: newTodoArr})
  }

  changeDone = (id, isDone) => {
    const {todoArr} = this.state
    let index = todoArr.findIndex(item => item.id === id)
    if(index !== -1) {
      let changeObj = todoArr[index]
      todoArr.splice(index, 1, {...changeObj, done:isDone})
      this.setState({todoArr})
    }
  }

  delTodo = (id) => {
    const {todoArr} = this.state
    let index = todoArr.findIndex(item => item.id === id)
    if(index !== -1) {
      todoArr.splice(index, 1)
      this.setState({todoArr})
    }
  }

  clearAllDone = () => {
    const {todoArr} = this.state
    let notDoneList = todoArr.filter(item => item.done !== true)
    this.setState({todoArr:notDoneList})
  }

  allDone = (isAllDone) => {
    const {todoArr} = this.state
    todoArr.map(item => item.done = isAllDone)
    this.setState({todoArr})
  }

  render() {
    const {todoArr} = this.state
    return (
      <div className='todo-container'>
        <TodoHeader addTodo={this.addTodo}/>
        <TodoList todoArr={todoArr} changeDone={this.changeDone} delTodo={this.delTodo}/>
        <TodoFooter todoArr={todoArr} clearAllDone={this.clearAllDone} allDone={this.allDone}/>
      </div>
    )
  }
}
