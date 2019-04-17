import React from 'react';
import { ProjectState, Persona, UseCase } from '../../constants/types';
import { addPersona, addUseCase } from '../../actions';
import { connect } from 'react-redux';
import PersonaEditor from '../PersonaEditor/PersonaEditor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import UseCaseEditor from '../UseCaseEditor/UseCaseEditor';

export interface DashboardProps {
}

interface StateProps {
    project: ProjectState;
}

interface DispatchProps {
    addPersona: typeof addPersona;
    addUseCase: typeof addUseCase;
}

type Props = StateProps & DispatchProps & DashboardProps;

interface State {
}

class Dashboard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    mapPersonasToComponents = (nav: Persona, index: number) => {
        return <PersonaEditor key={index} personaId={nav.id} />;
    };

    personaAddHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.props.addPersona({
            id: 0,
            name: '',
            shortDescription: '',
            longDescription: ''
        });
    }

    mapUseCasesToComponents = (nav: UseCase, index: number) => {
        return (<UseCaseEditor key={index} useCaseId={nav.id} />);
    }

    useCaseAddHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.props.addUseCase({
            id: 0,
            useCase: ''
        });
    }

    render() {
        const { mapPersonasToComponents, personaAddHandler, mapUseCasesToComponents, useCaseAddHandler } = this;
        return (
            <div className="container mt-3">
                <h3>Personas
                    <button type="button" className="btn btn-link" onClick={personaAddHandler}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </h3>
                <div className="item-carousel">
                    {this.props.project.personas.map(mapPersonasToComponents)}
                </div>

                <h3>Use Cases
                    <button type="button" className="btn btn-link" onClick={useCaseAddHandler}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </h3>
                <div className="item-carousel">
                    {this.props.project.useCases.map(mapUseCasesToComponents)}
                </div>

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

export default connect(mapStateToProps, { addPersona, addUseCase })(Dashboard);