import React from 'react';
import { ProjectState } from '../../constants/types';
import { setProjectName } from '../../actions';
import { connect } from 'react-redux';
import PersonaEditor from '../PersonaEditor/PersonaEditor';

export interface DashboardProps {
}

interface StateProps {
    project: ProjectState
}

interface DispatchProps {
    setProjectName: typeof setProjectName
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
                <PersonaEditor />
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

export default connect(mapStateToProps, { setProject: setProjectName })(Dashboard);