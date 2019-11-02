import React, { Component } from "react";
import { Consumer } from "./context";
import uuid from "uuid";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    id: ""
  };
  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onSubmitHandler = (value, e) => {
    e.preventDefault();
    this.setState(() => ({ id: uuid() }));
    value.dispatch({ type: "ADD_CONTACT", payload: this.state });
    this.setState(() => ({ name: "", email: "", phone: "" }));
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="add-contact-wrapper">
              <h5>Create contact</h5>
              <form
                className="add-contact-form"
                action=""
                onSubmit={this.onSubmitHandler.bind(this, value)}
              >
                <label className="add-contact-name" htmlFor="name">
                  Name:
                </label>
                <input
                  id="name"
                  name="create-input"
                  type="text"
                  value={this.state.name}
                  onChange={this.onNameChange}
                />

                <label className="add-contact-email" htmlFor="email">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  value={this.state.email}
                  onChange={e => {
                    const email = e.target.value;
                    this.setState(() => ({ email }));
                  }}
                />

                <label className="add-contact-phone" htmlFor="phone">
                  Phone:
                </label>
                <input
                  id="phone"
                  type="number"
                  value={this.state.phone}
                  onChange={e => {
                    const phone = e.target.value.match(/\+?\d+/);
                    this.setState(() => ({ phone }));
                  }}
                />

                <input className="form-submit-button" type="submit" />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
