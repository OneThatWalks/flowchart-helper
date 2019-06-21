import React from 'react';
import { ProjectState } from '../../constants/types';
import { connect } from 'react-redux';
import './Header.css';

export interface HeaderProps {

}

interface StateProps {
    project: ProjectState;
}

type Props = StateProps & HeaderProps;

class Header extends React.Component<Props> {

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

function mapStateToProps(state: StateProps, ownProps?: any): StateProps {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps)(Header);