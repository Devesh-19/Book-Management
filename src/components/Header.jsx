import React from "react";
import { NavLink } from "react-router-dom";
import { Journals } from "react-bootstrap-icons";

const Header = () => {
	return (
		<header>
			<h1>
				<Journals /> Book Management App
			</h1>
			<div className="links">
				<NavLink to="/" className="link" activeClassName="active" exact>
					Book List
				</NavLink>
				<NavLink to="/add" className="link" activeClassName="active">
					Add Book
				</NavLink>
			</div>
			<hr />
		</header>
	);
};

export default Header;
