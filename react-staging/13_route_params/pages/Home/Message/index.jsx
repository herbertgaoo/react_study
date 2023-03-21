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
                {/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp; */}

                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp; */}

                {/* 向路由传递state参数 */}
                <Link to={{pathname:"/home/message/detail", state: {id:msg.id, title:msg.title}}} >{msg.title}</Link>
              </li>
            })
          }
        </ul>
        <hr />
        {/* 声明接受params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* search无需声明接收 || state无须声明参数接收*/}
        <Route path="/home/message/detail" component={Detail} />
      </div>
    )
  }
}
