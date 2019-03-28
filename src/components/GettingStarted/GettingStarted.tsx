import React, { Component, FormEvent } from 'react';
import './GettingStarted.css';
import { ProjectState, SET_PROJECT } from '../../constants/types';
import { setProject } from '../../actions';
import { connect } from 'react-redux';

export interface GettingStartedProps {
    
}

interface StateProps {
    project: ProjectState
}

interface DispatchProps {
    setProject: typeof setProject
}

type Props = StateProps & DispatchProps & GettingStartedProps;

class GettingStarted extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setProject(e.target.value)
    }

    render() {
        const { handleSubmit, handleProjectNameChange } = this;
        const pName = this.props.project.projectName;
        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="getting-started-box">
                        <span className="form-text">Let's get to know your project!</span>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="projectName">Project Name</label>
                                <input type="text" className="form-control" id="projectName" placeholder="flowchart-helper" value={pName} onChange={handleProjectNameChange} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: StateProps, ownProps?: GettingStartedProps): StateProps {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps, { setProject })(GettingStarted);