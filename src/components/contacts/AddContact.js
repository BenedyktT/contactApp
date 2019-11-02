import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

export default class AddContact extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
		id: "",
		errors: {}
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmitHandler = (value, e) => {
		e.preventDefault();
		if (!this.state.name) {
			this.setState({ errors: { name: "This field is required" } });
			return;
		}
		if (!this.state.email) {
			this.setState({ errors: { email: "This field is required" } });
			return;
		}
		if (!this.state.phone) {
			this.setState({ errors: { phone: "This field is required" } });
			return;
		}
		this.setState(() => ({ id: uuid() }));
		value.dispatch({ type: "ADD_CONTACT", payload: this.state });
		this.setState(() => ({ name: "", email: "", phone: "", errors: {} }));

		this.props.history.push("/");
	};

	render() {
		const { email, errors, name, phone } = this.state;
		return (
			<Consumer>
				{value => {
					return (
						<div className="add-contact-wrapper">
							<h5 className="add-contact__">Create contact</h5>
							<form
								className="add-contact-form"
								onSubmit={this.onSubmitHandler.bind(this, value)}
							>
								<TextInputGroup
									name="name"
									value={name}
									onChange={this.onChange}
									label="Name:"
									placeholder="Name"
									error={errors.name}
								/>
								<TextInputGroup
									label="Email:"
									placeholder="Email"
									type="email"
									name="email"
									value={email}
									onChange={this.onChange}
									error={errors.email}
								/>

								<TextInputGroup
									label="Phone:"
									placeholder="Phone number"
									name="phone"
									value={phone}
									onChange={this.onChange}
									error={errors.phone}
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
