import React from 'react';
import { connect } from 'react-redux';
import { ProjectState } from '../../constants/types';
import { addRequirement, removeRequirement } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export interface RequirementsProps {
}

interface StateProps {
    project: ProjectState;
}

interface DispatchProps {
    addRequirement: typeof addRequirement;
    removeRequirement: typeof removeRequirement;
}

type Props = StateProps & DispatchProps & RequirementsProps;

interface RequirementsState {
    input: string;
}

type State = RequirementsState;

class Requirements extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    mapRequirementsToListElements = (item: string, index: number): JSX.Element => {
        const { removeRequirement } = this;
        return (
            <li key={index}>{item}
                <button className="btn btn-link" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {removeRequirement(item, index);}}><FontAwesomeIcon icon={faTrash} /></button>
            </li>
        );
    }

    removeRequirement = (requirement: string, index: number): void => {
        this.props.removeRequirement(requirement, index);
    }

    addRequirement = (e: React.KeyboardEvent<HTMLInputElement>): void => {

        if (e.key.toLowerCase() === 'enter') {
            if (this.state.input.length === 0) {
                return;
            }

            this.props.addRequirement(e.currentTarget.value);
            this.setState({ input: '' });
        }
    }

    inputOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        const { mapRequirementsToListElements, addRequirement, inputOnChange } = this;
        const requirements = this.props.project.requirements;
        const input = this.state.input;
        return (
            <div className="container">
                <h3>Requirements</h3>
                <ul>
                    {requirements.map((item, index) => mapRequirementsToListElements(item, index))}
                    <li>
                        <input type="text" value={input} onKeyUp={addRequirement} onChange={inputOnChange} />
                    </li>
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state: StateProps, ownProps?: RequirementsProps): StateProps & RequirementsProps {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps, { addRequirement, removeRequirement })(Requirements);