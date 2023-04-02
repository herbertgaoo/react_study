import React from "react"

export default function Demo() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState("hello")

  const myref = React.useRef()
  /**
   * 第一个参数返回的函数相当于componentWillUmount
   * 第二个参数传入需要监测的状态 相当于componentDidUpdate
   * 如果为空则相当于componentDidMount
   */
  React.useEffect(()=>{

    return ()=> {
      // componentWillUmount
    }
  }, [])

  function add() {
    // setCount(count+1)
    setCount(count => count+1)
  }
  return (
    <div>
      <h2>当前求和为:{count}</h2>
      <h2>{name}</h2>
      <button onClick={add}>加1</button>
    </div>
  )
}