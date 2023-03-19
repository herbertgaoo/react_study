import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class index extends Component {
  searchHandler = (keyword) => {
    // 连续解构赋值+重命名
    keyword = keyword || this.inputElement.value
    console.log(keyword);
    this.props.updateState({isFirst:false, isLoading: true})
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response => {
        this.props.setUserList(response.data.items)
        this.props.updateState({isLoading: false})
      },
      error => {this.props.updateState({isLoading: false, errorMsg:error.message })}
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
