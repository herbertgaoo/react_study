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