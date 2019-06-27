import React, { FormEvent } from 'react';
import './GettingStarted.css';
import { ProjectState, NavbarState } from '../../constants/types';
import { setProjectName } from '../../actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router';

export interface IGettingStartedOwnProps {
}

export interface IGettingStartedStateProps {
    project: ProjectState;
    navbar: NavbarState;
}

export interface IGettingStartedDispatchProps {
    setProjectName: typeof setProjectName;
}

export interface IGettingStartedState {
    submitted: boolean;
    name: string;
}

export type GettingStartedProps = IGettingStartedStateProps & IGettingStartedDispatchProps & IGettingStartedOwnProps;

export type GettingStartedState = IGettingStartedState;

export class GettingStarted extends React.Component<GettingStartedProps, GettingStartedState> {

    constructor(props: GettingStartedProps) {
        super(props);
        this.state = {
            submitted: false,
            name: props.project.projectName
        };
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.setProjectName(this.state.name);
        this.setState({
            ...this.state,
            submitted: true
        });
    }

    handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    render() {
        if (this.state.submitted) {
            // Redirect if the component was submitted
            return (
                <Redirect to="/dashboard" />
            );
        }

        const { handleSubmit, handleProjectNameChange } = this;
        const pName = this.state.name;

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
                            <div className="form-group">
                                <button type="submit" className="btn btn-default float-right"> <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: IGettingStartedStateProps, ownProps?: IGettingStartedOwnProps): IGettingStartedStateProps {
    return {
        project: state.project,
        navbar: state.navbar
    };
}

export default connect(mapStateToProps, { setProjectName })(GettingStarted);