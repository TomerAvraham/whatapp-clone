import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import Chats from "./components/Chats";

export default class App extends Component {
  state = {
    dataBase: [
      {
        id: 0,
        name: "john",
        number: "0501234567",
        img: "https://loremflickr.com/320/240",
        chats: [
          {title:"supp?", time:"20:14", name:"Jhonny"},
          {title:"alright", time:"20:15", name:"Jhon"},
          {title:"same", time:"21:00", name:"Jhonny"}
        ]
      },
      {
        id: 1,
        name: "johnny",
        number: "050777777",
        img: "https://loremflickr.com/320/240",
        chats: [
          {title:"lunch?", time:"11:45", name:"Jhon"},
          {title:"I'm down. in 15 min?", time:"11:45", name:"Jhonny"},
          {title:"cool just let me know", time:"11:46", name:"Jhon"}
        ]
      },
    ],
    currentUser: 0,
  };

  handleContactChange = id => {
    this.setState({
      currentUser: id
    })
  }

  addMassageToContact = massage => {
    let d = new Date()
    let tempDB = [...this.state.dataBase]
    let newMsg = {
      title: massage,
      time: `${d.getHours()}:${d.getMinutes()}`,
      name: this.state.dataBase[this.state.currentUser].name
    }
    tempDB[this.state.currentUser].chats.push(newMsg)
    this.setState({
      dataBase: tempDB
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header user={this.state.dataBase[this.state.currentUser].name}/>
        </header>
        <aside>
          <ContactsList hcc={this.handleContactChange} db={this.state.dataBase} />
        </aside>
        <main>
          <Chats massages={this.state.dataBase[this.state.currentUser].chats} addMassage={this.addMassageToContact}/>

        </main>
      </div>
    );
  }
}
