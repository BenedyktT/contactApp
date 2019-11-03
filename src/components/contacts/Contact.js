import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Contact extends Component {
	state = {
		detailsIsClicked: false
	};
	clickHandler = () => {
		this.setState(() => ({ detailsIsClicked: !this.state.detailsIsClicked }));
	};

	removeOnClick = async (id, dispatch) => {
		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
			dispatch({ type: "DELETE", payload: id });
		} catch (e) {
			dispatch({ type: "DELETE", payload: id });
		}
	};

	render() {
		const { id, name, phone, email } = this.props.contact;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="contact-wrapper">
							<div className="contact-content">
								<h4>
									{name}{" "}
									<i onClick={this.clickHandler}>
										{this.state.detailsIsClicked ? "↑" : "↓"}
									</i>
								</h4>
								{this.state.detailsIsClicked && (
									<ul className="list-group">
										<li className="list-group">Email: {email}</li>
										<li className="list-group">Phone: {phone}</li>
									</ul>
								)}
							</div>
							<div className="contact-actions">
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
								<Link to={`/contact/edit/${id}`}>
									<i>Edit</i>
								</Link>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
