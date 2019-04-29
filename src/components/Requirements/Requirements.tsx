import React from 'react';
import { connect } from 'react-redux';
import { ProjectState } from '../../constants/types';

export interface RequirementsProps {
}

interface StateProps {
    project: ProjectState;
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps & RequirementsProps;

interface State {
}

class Requirements extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    mapRequirementsToListElements(item: string): JSX.Element {
        return (
            <li>{item}</li>
        );
    }

    addRequirement(e: React.KeyboardEvent<HTMLInputElement>): void {
        console.log(e.currentTarget.value);
    }

    render() {
        return (
            <div className="container">
                <h3>Requirements</h3>
                <ul>
                    {this.props.project.requirements.map((item) => this.mapRequirementsToListElements(item))}
                    <li>
                        <input type="text" onKeyUp={this.addRequirement}/>
                    </li>
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state: StateProps, ownProps: RequirementsProps): StateProps & RequirementsProps {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps, {})(Requirements);