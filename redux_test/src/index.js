import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
      {/* Provider自动传递store给容器组件, App所有的后代容器组件都能接收到store */}
        <App />
    </React.StrictMode>
)

/**
 * 监测redux中状态的改变，如redux的状态改变，则App重新渲染
 * 使用react-redux之后自动监测
 */
// store.subscribe(()=>{
//   root.render(
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//   )
// })