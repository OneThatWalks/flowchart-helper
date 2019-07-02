import React from 'react';
import { connect } from 'react-redux';
import { ProjectState, Flow } from 'constants/types';
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

	redirectToFlowEditor = (id: number) => {
		this.props.history.push(`/flowEditor?id=${id}`);
	}

	onAddButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		this.redirectToFlowEditor(0);
	}

	onEditButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const { redirectToFlowEditor } = this;
		const flowId = event.currentTarget.getAttribute('data-flowId');
		if (!flowId || parseInt(flowId, 10) === NaN) {
			alert('There was an error redirecting to flow.  Please try again.');
			return;
		}
		redirectToFlowEditor(parseInt(flowId as string));
	}

	mapFlowsToListElements = (item: Flow, index: number) => {
		const { onEditButtonClickHandler } = this;
		return (
			<button key={index} className="list-group-item list-group-item-action" data-flowId={item.id} onClick={onEditButtonClickHandler}>
				{item.name}
			</button>
		);
	}

	render() {
		const { onAddButtonClickHandler, mapFlowsToListElements } = this;
		const flows = this.props.project.flows;
		return (
			<div className="container">
				<h3>
					Flows
				</h3>
				<ul className="list-group">
					{flows.map(mapFlowsToListElements)}
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