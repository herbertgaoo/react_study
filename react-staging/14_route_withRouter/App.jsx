import React, { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    const basePath = ""
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在react中靠路由链接实现切换组件 编写路由链接*/}
                <MyNavLink to={basePath+'/about'} >About</MyNavLink>
                <MyNavLink to={basePath+'/home'}>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 exact-严格匹配*/}
                <Switch>
                  <Route path={basePath+'/about'} component={About}/>
                  <Route path={basePath+'/home'} component={Home}/>
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
