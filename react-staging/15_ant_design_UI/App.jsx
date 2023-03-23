import React, { Component } from 'react'
import { ConfigProvider, Button, Space, DatePicker } from 'antd'
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default class App extends Component {
  state = {
    theme: {
      token: {
        colorPrimary: '#ff16b2'
      }
    }
  }
  render() {
    const {theme} = this.state
    return (
      <ConfigProvider theme={theme}>
        <div>
          <button>button</button>
          <Button type="primary">primary button</Button>
          <Button>primary button</Button>

          <Space>
            <HomeOutlined />
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />
          </Space>

          <Space direction="vertical" size={12}>
            <RangePicker />
            <RangePicker showTime />
            <RangePicker picker="week" />
            <RangePicker picker="month" />
            <RangePicker picker="quarter" />
            <RangePicker picker="year" />
          </Space>
        </div>
      </ConfigProvider>
    )
  }
}
