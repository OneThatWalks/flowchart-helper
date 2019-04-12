import { ProjectState, Persona } from "../../constants/types";
import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { updatePersona, removePersona } from "../../actions";
import './PersonaEditor.css';

export interface PersonaEditorProps {
    personaId: number;
}

interface StateProps {
    project: ProjectState
}

interface DispatchProps {
    updatePersona: typeof updatePersona;
    removePersona: typeof removePersona;
}

type Props = StateProps & PersonaEditorProps & DispatchProps;

interface State {
    personaName: string;
}

class PersonaEditor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        console.log(props);
        this.state = {
            personaName: ''
        };
    }

    handlePersonaNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            personaName: e.target.value
        })
    }

    handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'enter') {
            this.props.updatePersona({
                id: this.props.personaId,
                name: this.state.personaName,
                shortDescription: '',
                longDescription: ''
            });
        }
    }

    handlePersonaRemove = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        this.props.removePersona(this.props.personaId);
    }

    render() {
        const { handlePersonaNameChange, handleKeyUp, handlePersonaRemove } = this;
        const personaName = this.state.personaName;
        return (
            <div className="persona-container fc-border">
                <span className="persona-close" onClick={handlePersonaRemove} title="Remove this persona">
                    <FontAwesomeIcon icon={faUserSlash} size="1x" color="gray" />
                </span>

                <FontAwesomeIcon icon={faUser} size="6x" color="gray" />
                {/* TODO: access short desc? work on update */}
                <input type="text" className="form-control form-control-sm" id="personaName" placeholder="End User" value={personaName} onChange={handlePersonaNameChange} onKeyUp={handleKeyUp} />
            </div>
        )
    }
}

function mapStateToProps(state: StateProps, ownProps: PersonaEditorProps): StateProps & PersonaEditorProps {
    return {
        project: state.project,
        personaId: ownProps.personaId
    }
}

export default connect(mapStateToProps, { updatePersona, removePersona })(PersonaEditor);