import React from "react";
import ContactItem from "./ContactItem";
import '../css/ContactList.css'

export default function ContactsList({ db, hcc }) {
  return (
    <div className="contactList" >
      {db.map((user, i) => (
        <ContactItem  key={i} user={user} hcc={hcc} />
      ))}
    </div>
  );
}
