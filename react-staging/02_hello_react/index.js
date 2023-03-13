//引入react
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// 渲染APP到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
