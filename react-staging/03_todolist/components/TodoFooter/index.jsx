import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  changeHandler = (isAllDone) => {
    this.props.allDone(isAllDone)
  }
  render() {
    const {todoArr, clearAllDone} = this.props
    let doneCount = todoArr.reduce((pre, cur) => pre+(cur.done?1:0), 0)
    return (
      <div className="todo-footer">
        <label htmlFor="">
          <input type="checkbox" checked={doneCount === todoArr.length && todoArr.length !==0 } onChange={(e)=> {this.changeHandler(e.target.checked)}}/>
          &nbsp;已完成 {doneCount} / 全部 {todoArr.length}
        </label>
        <button className="btn-clear-done" onClick={clearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
