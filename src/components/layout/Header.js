import React from "react";

export default function Header(props) {
  return (
    <nav className="nabar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  name: "unknown"
};
