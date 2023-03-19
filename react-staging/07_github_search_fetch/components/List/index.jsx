import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class index extends Component {
  state = {
    userList: [],
    isFirst: true,
    isLoading: false,
    errorMsg: ""
  }

  componentDidMount () {
    PubSub.subscribe("updateData", (_, data) => {
      this.setState(data)
    })
  }
  
  render() {
    const {userList, isFirst, isLoading, errorMsg} = this.state
    return (
      <div className='user-list'>
        {
          isFirst ? <h2>输入关键字查询</h2> :
          isLoading ? <h2>Loading。。。</h2> :
          errorMsg ? <h2>{errorMsg}</h2> :
          userList.map(user => {
            return <div className="user-item" key={user.id}>
                    <img alt="user_header" src={user.avatar_url} />
                    <span><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a></span>
                  </div>
          })
        }
      </div>
    )
  }
}
