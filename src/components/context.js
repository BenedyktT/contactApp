import React, { Component } from "react";
import uuid from "uuid";
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload;
        })
      };
    case "ADD_CONTACT":
      const newContacts = [...state.contacts, action.payload];
      return {
        ...state,
        contacts: newContacts
      };

    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "5554324255",
        id: uuid()
      },
      {
        name: "Alan Smith",
        email: "jdoe",
        phone: "55543244255",
        id: uuid()
      },
      {
        name: "Another Fake Name",
        email: "afname@revolution.com",
        phone: "55431455534",
        id: uuid()
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
