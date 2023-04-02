import React, { Component } from "react";
import {NavLink, Outlet} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>我是Home内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink to="/home/news">News</NavLink>
            </li>
            <li>
            <NavLink to="/home/message">Message</NavLink>
            </li>
          </ul>
            <Outlet/>
        </div>
      </div>
    );
  }
}
