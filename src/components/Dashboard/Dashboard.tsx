import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import { ProjectState } from '../../constants/types';
import Requirements from '../Requirements/Requirements';

export interface DashboardProps {
}

interface StateProps {
    project: ProjectState;
}

interface DispatchProps {
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

function mapStateToProps(state: StateProps, ownProps?: DashboardProps): StateProps {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps, {})(Dashboard);