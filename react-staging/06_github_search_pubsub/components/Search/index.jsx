import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.css'

export default class index extends Component {
  searchHandler = (keyword) => {
    // 连续解构赋值+重命名
    keyword = keyword || this.inputElement.value
    PubSub.publish("updateData", {isFirst:false, isLoading: true})
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response => {
        PubSub.publish("updateData", {isLoading: false, userList: response.data.items})
      },
      error => {PubSub.publish("updateData", {isLoading: false, errorMsg:error.message })}
    )
  }
  enterHandler = (e) =>{
    if(e.keyCode !== 13) return;
    this.searchHandler(e.target.value)
  }
  render() {
    return (
      <div className='search-area'>
        <h2>Search Github Users</h2>
        <div className='input-area'>
          <input ref={c => this.inputElement = c} onKeyUp={this.enterHandler} type="text" placeholder='enter the name for you search' />
          <button onClick={this.searchHandler}>Search</button>
        </div>
      </div>
    )
  }
}
