import { ProjectState, Persona } from "../../constants/types";
import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { addPersona } from "../../actions";

export interface PersonaEditorProps {

}

interface StateProps {
    project: ProjectState
}

interface DispatchProps {
    addPersona: typeof addPersona;
}

type Props = StateProps & PersonaEditorProps;

interface State {
    personaName: string;
}

class PersonaEditor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            personaName: ''
        }
    }

    handlePersonaNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            personaName: e.target.value
        })
    }

    handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'enter') {
            addPersona({
                name: this.state.personaName,
                shortDescription: '',
                longDescription: ''
            });
        }
    }

    render() {
        const { handlePersonaNameChange, handleKeyUp } = this;
        const personaName = this.state.personaName;
        return (
            <div className="container">
                <FontAwesomeIcon icon={faUser} size="7x" color="gray" />
                <label htmlFor="personaName">Project Name</label>
                <input type="text" className="form-control" id="personaName" placeholder="End User" value={personaName} onChange={handlePersonaNameChange} onKeyUp={handleKeyUp} />
            </div>
            //TODO: List other persona
        )
    }
}

function mapStateToProps(state: StateProps, ownProps?: PersonaEditorProps): StateProps {
    return {
        project: state.project
    }
}

export default connect(mapStateToProps, { addPersona })(PersonaEditor);