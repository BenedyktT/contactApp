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
		contacts: [],
		dispatch: action => this.setState(state => reducer(state, action))
	};
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => {
				const userList = data.map(({ name, email, phone }) => {
					return { name, email, phone, id: uuid() };
				});
				this.setState({
					contacts: userList
				});
			});
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}
export const Consumer = Context.Consumer;
