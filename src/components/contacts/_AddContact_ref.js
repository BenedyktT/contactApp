import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";

export default class AddContact extends Component {
	constructor(props) {
		super(props);
		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
	}
	onSubmitHandler = (value, e) => {
		e.preventDefault();
		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value
		};
		console.log(contact);
		/* 	e.preventDefault();
		this.setState(() => ({ id: uuid() }));
		value.dispatch({ type: "ADD_CONTACT", payload: this.state });
		this.setState(() => ({ name: "", email: "", phone: "" })); */
	};
	static defaultProps = {
		name: "Fred Smith",
		email: "fred@yaho.com",
		phone: "777"
	};

	render() {
		const { name, email, phone } = this.props;
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
									name="name"
									defaultValue={name}
									ref={this.nameInput}
								/>

								<label className="add-contact-email" htmlFor="email">
									Email:
								</label>
								<input
									id="email"
									type="email"
									name="email"
									ref={this.emailInput}
									defaultValue={email}
								/>

								<label className="add-contact-phone" htmlFor="phone">
									Phone:
								</label>
								<input
									id="phone"
									type="number"
									name="phone"
									ref={this.phoneInput}
									defaultValue={phone}
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
