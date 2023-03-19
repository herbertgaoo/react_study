import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {
    userList: [],
    isFirst: true,
    isLoading: false,
    errorMsg: ""
  }
  updateState = (state) => {
    this.setState(state)
  }
  setUserList = (data)=>{
    this.setState({userList: data})
  }
  render() {
    return (
      <div>
        <Search setUserList={this.setUserList} updateState={this.updateState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
