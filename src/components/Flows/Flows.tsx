import React from 'react';
import { connect } from 'react-redux';
import { ProjectState } from 'constants/types';
import './Flows.css';
import { withRouter, RouteComponentProps } from 'react-router';

export interface FlowsOwnProps {
}

export interface FlowsStateProps {
	project: ProjectState;
}

export interface FlowsDispatchProps {
}

export type FlowsProps = RouteComponentProps & FlowsStateProps & FlowsDispatchProps & FlowsOwnProps;

export interface FlowsState {
}

export class Flows extends React.Component<FlowsProps, FlowsState> {

	onAddButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		this.props.history.push('/flowEditor?id=0');
	}

	render() {
		//const flows = this.props.project.flows;
		const {onAddButtonClickHandler} = this;
		return (
			<div className="container">
				<h3>
					Flows
				</h3>
				<ul className="list-group">

				</ul>
				<button className="btn btn-link" id="addFlowButton" onClick={onAddButtonClickHandler}>Add</button>
			</div>
		);
	}

}

function mapStateToProps(state: FlowsStateProps, ownProps: FlowsOwnProps): FlowsStateProps & FlowsOwnProps {
	return {
		project: state.project
	};
}

export default withRouter(connect(mapStateToProps, {})(Flows));