import React, { Component } from "react";
import {Route, Redirect} from 'react-router-dom'
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>我是Home内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news"/>
        </div>
      </div>
    );
  }
}
