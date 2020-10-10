import React from "react";
import Message from "./Message";
import Form from './Form'
import '../css/Chats.css'


export default function Chats({ massages , addMassage }) {

  return (
    <div className="chats" >
      {massages.map((massage, i) => (
        <Message key={i} msg={massage} />
      ))}
    <Form addMassage={addMassage} />
    </div>
  );
}
