import React from 'react';
import { connect } from 'react-redux';
import { ProjectState, Requirement } from '../../constants/types';
import { addRequirement, removeRequirement } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export interface RequirementsOwnProps {
}

export interface RequirementsStateProps {
    project: ProjectState;
}

export interface RequirementsDispatchProps {
    addRequirement: typeof addRequirement;
    removeRequirement: typeof removeRequirement;
}

export type RequirementsProps = RequirementsStateProps & RequirementsDispatchProps & RequirementsOwnProps;

export interface RequirementsState {
    input: string;
}

export class Requirements extends React.Component<RequirementsProps, RequirementsState> {

    constructor(props: RequirementsProps) {
        super(props);
        this.state = {
            input: ''
        };
    }

    mapRequirementsToListElements = (item: Requirement, index: number): JSX.Element => {
        const { removeRequirement } = this;
        return (
            <li key={index}>{item.name}
                <button className="btn btn-link" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {removeRequirement(item);}}><FontAwesomeIcon icon={faTrash} /></button>
            </li>
        );
    }

    removeRequirement = (requirement: Requirement): void => {
        this.props.removeRequirement(requirement);
    }

    addRequirement = (e: React.KeyboardEvent<HTMLInputElement>): void => {

        if (e.key.toLowerCase() === 'enter') {
            if (this.state.input.length === 0) {
                return;
			}

            this.props.addRequirement({
				id: 0,
				// currentTarget is the target that triggered the event (A.K.A the input field)
				name: e.currentTarget.value
			});

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
                        <input type="text" className="form-control form-control-sm" value={input} onKeyUp={addRequirement} onChange={inputOnChange} />
                    </li>
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state: RequirementsStateProps, ownProps?: RequirementsOwnProps): RequirementsStateProps & RequirementsOwnProps {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps, { addRequirement, removeRequirement })(Requirements);