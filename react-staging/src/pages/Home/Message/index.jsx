import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {
  state = {
    messageArr: [
      {id:"001", title:"消息1"},
      {id:"002", title:"消息2"},
      {id:"003", title:"消息3"}
    ]
  }
  render() {
    const {messageArr} = this.state;
    return (
      <div>
        <ul>
          {
            messageArr.map(msg => {
              return <li key={msg.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp;
              </li>
            })
          }
        </ul>
        <hr />
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    )
  }
}
