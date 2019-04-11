import React from 'react';
import { ProjectState, Persona } from '../../constants/types';
import { addPersona } from '../../actions';
import { connect } from 'react-redux';
import PersonaEditor from '../PersonaEditor/PersonaEditor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export interface DashboardProps {
}

interface StateProps {
    project: ProjectState
}

interface DispatchProps {
    addPersona: typeof addPersona
}

type Props = StateProps & DispatchProps & DashboardProps;

interface State {
}

class Dashboard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    mapPersonasToComponents = (nav: Persona, index: number) => {
        return <PersonaEditor id={nav.id} />
    };

    personaAddHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.props.addPersona({
            id: 0,
            name: '',
            shortDescription: '',
            longDescription: ''
        });
    }

    render() {
        const { mapPersonasToComponents, personaAddHandler } = this;
        return (
            <div className="container mt-3">
                <h3>Personas <button type="button" className="btn btn-link" onClick={personaAddHandler}><FontAwesomeIcon icon={faPlus} /></button></h3>

                {this.props.project.personas.map(mapPersonasToComponents)}
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

export default connect(mapStateToProps, { addPersona })(Dashboard);