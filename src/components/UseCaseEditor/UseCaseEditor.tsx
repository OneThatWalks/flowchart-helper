import React from 'react';
import { connect } from 'react-redux';
import { updateUseCase, removeUseCase } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faTrash } from '@fortawesome/free-solid-svg-icons';
import './UseCaseEditor.css';
import { ProjectState } from '../../constants/types';

export interface UseCaseEditorProps {
    useCaseId: number;
}

interface StateProps {
    project: ProjectState;
}

interface DispatchProps {
    updateUseCase: typeof updateUseCase;
    removeUseCase: typeof removeUseCase;
}

type Props = StateProps & DispatchProps & UseCaseEditorProps;

interface State {
    useCase: string;
}

class UseCaseEditor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        const existingUseCase = props.project.useCases.find(u => u.id === props.useCaseId);
        let use = '';
        if (existingUseCase && existingUseCase.useCase !== '') {
            use = existingUseCase.useCase;
        }

        this.state = {
            useCase: use
        };
    }

    handleUseCaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            useCase: e.target.value
        });
    }

    handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key.toLowerCase() === 'enter') {
            this.props.updateUseCase({
                id: this.props.useCaseId,
                useCase: this.state.useCase
            });
            // Clear state of component
            this.setState({
                useCase: ''
            });
        }
    }

    handleUseCaseRemove = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const existing = this.props.project.useCases.find(u => u.id === this.props.useCaseId);
        if (existing && existing.useCase === '') {
            this.props.removeUseCase(this.props.useCaseId);
            return;
        }
        const res = confirm('Are you sure?');
        if (!res) {
            return;
        }
        this.props.removeUseCase(this.props.useCaseId);
    }
    
    render() {
        const { handleUseCaseRemove, handleUseCaseChange, handleKeyUp } = this;
        const useCase = this.state.useCase;
        const stateUseCase = this.props.project.useCases.find(u => u.id === this.props.useCaseId);
        return (
            <div className="usecase-container fc-border">
                <span className="usecase-close" onClick={handleUseCaseRemove} title="Remove this use case.">
                    <FontAwesomeIcon icon={faTrash} size="1x"/>
                </span>

                <FontAwesomeIcon icon={faAddressCard} size="4x" color="black" />
                <input  type="text" 
                        className="form-control form-control-sm"
                        placeholder="Use Case"
                        title="Enter a unit of work a user can do to interact your project."
                        value={useCase}
                        onChange={handleUseCaseChange}
                        onKeyUp={handleKeyUp}
                />
            </div>
        );
    }

}

function mapStateToProps(state: StateProps, ownProps: UseCaseEditorProps): StateProps & UseCaseEditorProps {
    return {
        useCaseId: ownProps.useCaseId,
        project: state.project
    };
}

export default connect(mapStateToProps, { updateUseCase, removeUseCase })(UseCaseEditor);