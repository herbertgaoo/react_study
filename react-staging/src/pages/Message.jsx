import React, { useState } from 'react'

export default function Message (){
  const [messages, setMessages] = useState([
    {"id":1, text: "message001"},
    {"id":2, text: "message002"},
    {"id":3, text: "message003"}
  ])
  return (
    <div>
      <ul>
       {
        messages.map(m => <li key={m.id}><a href="/message1">{m.text}</a>&nbsp;&nbsp;</li>)
       }
      </ul>
    </div>
  )
}
