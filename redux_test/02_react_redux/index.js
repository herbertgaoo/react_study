import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
)

// 检测redux中状态的改变，如redux的状态改变，则App重新渲染
store.subscribe(()=>{
  root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
  )
})