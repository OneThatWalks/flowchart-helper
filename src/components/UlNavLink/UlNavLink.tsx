import { Link } from "react-router-dom";
import { NavbarLink } from "../../constants/types";
import React from "react";

export type UlNavLinkProps = NavbarLink;

class UlNavLink extends React.Component<UlNavLinkProps> {

	render() {
		return (
			<li className="nav-item">
				<Link to={this.props.value} className="nav-link">{this.props.name}</Link>
			</li>
		);
	}
}

export default UlNavLink;