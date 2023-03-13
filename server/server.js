const express = require("express")
const app = express()

app.use((req, resp, next) => {
  console.log("请求了接口");
  next()
})

app.get("/students", (req, resp) => {
  const students = [
    {id:"001", name:"tom", age:18},
    {id:"002", name:"jack", age:19},
    {id:"003", name:"rose", age:17}
  ]
  resp.send(students)
})

app.listen(9090, (err)=>{
  if(!err) {
    console.log("服务器启动成功，请求地址：http://localhost:9090/")
  }
})