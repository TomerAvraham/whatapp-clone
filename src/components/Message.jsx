import React from 'react'
import "../css/message.css"

export default function Message({msg}) {
        return (
            <div className="message-box">
                <h1>{msg.title}</h1>
                <p>sent at:{msg.time}</p>
                <p>sent by: {msg.name}</p>
            </div>
        )
}
