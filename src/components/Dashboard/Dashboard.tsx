import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import { ProjectState } from '../../constants/types';
import Requirements from '../Requirements/Requirements';

export interface IDashboardOwnProps {
}

export interface IDashboardStateProps {
    project: ProjectState;
}

export interface IDashboardDispatchProps {
}

export type DashboardProps = IDashboardStateProps & IDashboardDispatchProps & IDashboardOwnProps;

export class Dashboard extends React.Component<DashboardProps> {
    
    render() {
        return (
            <div className="container mt-3">
                <Requirements />
                <h3>
                    Flows
                </h3>
                <h3>
                    Class Diagram
                </h3>
            </div>
        );
    }
}

function mapStateToProps(state: IDashboardStateProps, ownProps?: IDashboardOwnProps): IDashboardStateProps {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps, {})(Dashboard);