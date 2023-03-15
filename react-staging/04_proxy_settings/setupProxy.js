/**
 * 方法二
 */
const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    proxy("/api1", {
      targee: "http://localhost:5000",  // 请求转发的目标地址
      changeOrigin: true,   // 控制服务端接收到的请求头中Host的值
      pathRewrite: {"^/api1": ""}   // 重写请求路径 必须！！！
    })
  )
}


/**
 * 方法一
 */
// package.json中配置proxy属性
// "proxy": "http://localhost:5000"