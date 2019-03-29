import { Link } from "react-router-dom";
import { NavbarLink } from "../../constants/types";
import React from "react";


type Props = NavbarLink;

class UlNavLink extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
                <li className="nav-item">
                    <Link to={this.props.value} className="nav-link">{this.props.name}</Link>
                </li>
        );
    }
}

export default UlNavLink;