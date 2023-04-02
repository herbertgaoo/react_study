### 03_react_redux_优化
  1. 容器组件和UI组件整合为一个文件
  2. 无须自己传递store给容器组件，通过在App中使用Provider提供即可
  3. 无锡自己订阅store的状态改变，react-redux中自动监测
  4. mapDispatchToProps可以简写为一个对象，使用key:value,传递最终dispatch的action
      定义UI组件-不用暴露
      引入connect生成一个容器组件，并且暴露

redux devtools
  1. yarn add redux-devtools-extensions
  2. redux > store.js 引入 import {composeWithDevTools} from "redux-devtools-extensions"
  3. export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))


# react-extra

## setState的两种写法
  1. 对象式的`setState(stateChange, [callback])`
  callback 是可选参数，在状态更新完之后调用
  ``` js
  setState(stateChange, ()=> {
    console.log(this.state.count)
  })
  ```

  2. 函数式的 `setState`
  ``` js
    setState((state, props) => ({count: state.count+1}), ()=> {
      console.log(this.state.count)
    })
  ```

  使用原则：
    1. 更新状态依赖于原来的状态推荐使用函数式写法
    2. 更新状态不依赖于原来的状态 推荐使用对象式


 ## lazyLoad
  ``` jsx
  import React, { lazy, Suspense } from "react";
  // 需要懒加载的组件
  const About = lazy(()=> import('./components/About'))
  const Home = lazy(()=> import('./components/Home'))

  所有路由需要使用`Suspense`包裹，并配置属性`fallback`
  <Suspense fallback={<h1>Loading......</h1>}>
    <Route path="/about" component={About}/>
    <Route path="/home" component={Home}/>
  </Suspense>
  ```

## Hooks
  ```jsx
    // useState
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState("hello")

    /**
     * useEffect
     * 第一个参数返回的函数相当于componentWillUmount
     * 第二个参数传入需要监测的状态 相当于componentDidUpdate
     * 如果为空则相当于componentDidMount
     */
    React.useEffect(()=>{

      return ()=> {
        // componentWillUmount
      }
    }, [])


    // useRef
    const myref = React.useRef()
  ```

## Fragment
  fragment不会被react渲染到dom中，编译时会被丢弃，类似Vue中的template，fragment允许传入属性key，用户遍历渲染

## Context
  用于祖组件和后代组件通信, 一般用于封装组件
  ``` jsx
  // 创建context对象
  const UserNameContext = React.createContext()

  // 渲染时通过Context.Provider渲染
  <UserNameContext.Provider value={{name:userName, age: 18}}></UserNameContext.Provider>

  // 声明接收context
  static contextType = UserNameContext
  
  const {name, age} = this.context
  console.log(name)
  console.log(age)
  
  // 第二种方式
  <UserNameContext.Consumer>
    { value => `${value.name}, ${value.age}`}
  </UserNameContext.Consumer>

  ```

## 组件优化
  只要执行setState()方法，即使不改变数据也会执行render()方法，效率低，同时会调用子组件的render，即使子组件没有使用父组件的state

  ``` jsx
  shouldComponentUpdate(nextProps, nextState) {

    return true
  }

  import React, { PureComponent } from 'react'

  ```
  解决方案：
  1. 重写`shouldComponentUpdate`,按照更新了逻辑
  2. 使用`PureComponent`

## renderProps
属性中传递一个函数，并且在组件体中调用，实现在组件中预留的位置渲染不同的子组件
``` jsx
  <A render={(name) => <B name={name}/>}/>
```

## Error boundary
``` jsx
  // 子组件出现任何错误时，调用 getDerivedStateFromError， 并且传递错误信息
  static getDerivedStateFromError(error) {
    console.log(error)
    return {hasError: error}
  }

  componentDidCatch() {
    // 统计错误，用于问题定位 处理
    consolo.log("组件出错时调用")
  }

  render() {
    return (
      {this.state.hasError ? <h2>系统异常</h2> : <h2>正常内容</h2>}
    )
  }
```


