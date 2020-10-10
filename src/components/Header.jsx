import React from 'react'
import '../css/Header.css'

export default function Header( { user } ) {
    return (
        <div className="header" >
        <img className="header__image" src="https://cdn.usbrandcolors.com/images/logos/whatsapp-logo.svg" alt=""/>
            <h1>Chatting With: {user} </h1>
        </div>
    )
}
