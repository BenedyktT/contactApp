import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
	return (
		<nav className="nabar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<Link to="/" className="navbar-brand">
					{props.branding}
				</Link>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact/add" className="nav-link">
							+ Add contact
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

Header.defaultProps = {
	name: "unknown"
};
