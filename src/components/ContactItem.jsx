import React from "react";
import "../css/ContactItem.css";

export default function ContactItem({ user, hcc }) {
  return (
  <div onClick={() => hcc(user.id)} className="contactCard">
      <img className="image" src={user.img} alt="avatar" />
      <div className="contact-details">
        <h1>{user.name}</h1>
        <div className="inner-details" >
            <span>{user.chats[user.chats.length -1].title}</span>
            <span>{user.chats[user.chats.length -1].time}</span>
        </div>
      </div>
  </div>
  )
}
