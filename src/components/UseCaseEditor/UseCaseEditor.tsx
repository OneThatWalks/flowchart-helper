import React from 'react';
import { connect } from 'react-redux';
import { addUseCase, removeUseCase } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faTrash } from '@fortawesome/free-solid-svg-icons';
import './UseCaseEditor.css';

export interface UseCaseEditorProps {
    useCaseId: number;
}

interface StateProps {
}

interface DispatchProps {
    addUseCase: typeof addUseCase;
    removeUseCase: typeof removeUseCase;
}

type Props = StateProps & DispatchProps & UseCaseEditorProps;

interface State {
    useCase: string;
}

class UseCaseEditor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
    
    render() {
        return (
            <div className="usecase-container fc-border">
                <span className="usecase-close" onClick={() => {}} title="Remove this use case.">
                    <FontAwesomeIcon icon={faTrash} size="1x"/>
                </span>

                <FontAwesomeIcon icon={faAddressCard} size="4x" color="black" />
                <input type="text" className="form-control form-control-sm" placeholder="Use Case" title="Enter a unit of work a user can do to interact your project." />
            </div>
        );
    }

}

function mapStateToProps(state: StateProps, ownProps: UseCaseEditorProps): StateProps & UseCaseEditorProps {
    return {
        useCaseId: ownProps.useCaseId
    };
}

export default connect(mapStateToProps, { addUseCase, removeUseCase })(UseCaseEditor);