import React, {Component} from "react";
import hi from './index.module.css'

export default class Hello extends Component {
  render () {
    return (
      <h2 className={hi.title}>Hello World</h2>
    )
  }
}