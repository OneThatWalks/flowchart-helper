import React from 'react';
import { ProjectState } from '../../constants/types';
import { connect } from 'react-redux';
import './Header.css';

export interface HeaderOwnProps {

}

export interface HeaderStateProps {
    project: ProjectState;
}

export type HeaderProps = HeaderStateProps & HeaderOwnProps;

export class Header extends React.Component<HeaderProps> {

    render() {
        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center project-title">
                    <span>{this.props.project.projectName}</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: HeaderStateProps, ownProps?: any): HeaderStateProps {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps)(Header);