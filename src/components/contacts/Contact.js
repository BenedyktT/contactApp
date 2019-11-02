import React, { Component } from "react";
import { Consumer } from "../context";

export default class Contact extends Component {
  state = {
    detailsIsClicked: false
  };
  clickHandler = () => {
    this.setState(() => ({ detailsIsClicked: !this.state.detailsIsClicked }));
  };

  removeOnClick = (id, dispatch) => {
    dispatch({ type: "DELETE", payload: id });
  };

  render() {
    const { id, name, phone, email } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i onClick={this.clickHandler}>
                  {this.state.detailsIsClicked ? "↑" : "↓"}
                </i>
                <i
                  style={{
                    color: "red",
                    float: "right",
                    cursor: "pointer"
                  }}
                  onClick={this.removeOnClick.bind(this, id, dispatch)}
                >
                  X
                </i>
              </h4>

              {this.state.detailsIsClicked && (
                <ul className="list-group">
                  <li className="list-group">Email: {email}</li>
                  <li className="list-group">Phone: {phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
