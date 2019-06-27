import React, { Component } from 'react';
import './Navigator.css';
import { Link } from 'react-router-dom';
import { NavbarState } from '../../constants/types';
import UlNavLink from '../UlNavLink/UlNavLink';
import { connect } from 'react-redux';

export interface NavigatorOwnProps {
}
export interface NavigatorStateProps {
    navbar: NavbarState
}

export type NavigatorProps = NavigatorStateProps & NavigatorOwnProps;

export class Navigator extends Component<NavigatorProps> {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">flowchart-helper</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mr-auto">
                            {this.props.navbar.links.map((nav, index) => {
                                return <UlNavLink key={index} name={nav.name} value={nav.value} />
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state: NavigatorStateProps, ownProps?: NavigatorOwnProps): NavigatorStateProps {
    return {
        navbar: state.navbar
    };
}

export default connect(mapStateToProps)(Navigator);