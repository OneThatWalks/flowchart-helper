import React, { Component, FormEvent } from 'react';
import { ProjectState, SET_PROJECT_NAME } from '../../constants/types';
import { setProject } from '../../actions';
import { connect } from 'react-redux';

export interface DashboardProps {
}

interface StateProps {
    project: ProjectState
}

interface DispatchProps {
    setProject: typeof setProject
}

type Props = StateProps & DispatchProps & DashboardProps;

interface State {
}

class Dashboard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="container mt-3">
                <p>Personas</p>
                <p>Use Cases</p>
                <p>Flows</p>
                <p>Class Diagram</p>
            </div>
        );
    }
}

function mapStateToProps(state: StateProps, ownProps?: DashboardProps): StateProps {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps, { setProject })(Dashboard);