import React, { Component } from 'react'
import { Button } from 'antd'

export default class App extends Component {
  render() {
    return (
      <div>
        <button>button</button>
        <Button type="primary">primary button</Button>
        <Button>primary button</Button>
      </div>
    )
  }
}
