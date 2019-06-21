import React, { FormEvent } from 'react';
import './GettingStarted.css';
import { ProjectState, NavbarState } from '../../constants/types';
import { setProjectName, removeLink, addLink } from '../../actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router';
import { navbarLinks } from '../../constants';

export interface IGettingStartedOwnProps {
    start: boolean;
}

export interface IGettingStartedStateProps {
    project: ProjectState;
    navbar: NavbarState;
}

export interface IGettingStartedDispatchProps {
    setProjectName: typeof setProjectName;
    removeLink: typeof removeLink;
    addLink: typeof addLink;
}

export type GettingStartedProps = IGettingStartedStateProps & IGettingStartedDispatchProps & IGettingStartedOwnProps;

export class GettingStarted extends React.Component<GettingStartedProps> {

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.removeLink(navbarLinks[0]);
        this.props.addLink(navbarLinks[1]);
    }

    handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setProjectName(e.target.value);
    }

    render() {
        if (this.props.project.projectName !== '') {
            return (
                <Redirect to="/dashboard" />
            );
        }

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

export default connect(mapStateToProps, { setProjectName, removeLink, addLink })(GettingStarted);