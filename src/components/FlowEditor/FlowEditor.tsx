import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { IdParam } from 'constants/types';
import { IFlowService, FlowService } from 'services/flow-engine';
import './FlowEditor.css';

export interface FlowEditorOwnProps {
}

export interface FlowEditorStateProps {
}

export interface FlowEditorDispatchProps {
}

export type FlowEditorProps = RouteComponentProps<IdParam> & FlowEditorStateProps & FlowEditorDispatchProps & FlowEditorOwnProps;

export interface FlowEditorState {
}

export class FlowEditor extends React.Component<FlowEditorProps, FlowEditorState> {

	private _flowService: IFlowService;

	constructor(props: FlowEditorProps) {
		super(props);

		//const flowId = this.props.match.params.id;
		this._flowService = new FlowService();
	}

	render() {
		return (<div className="container">
			{this.props.match.params.id}
			{this._flowService.getCanvas()}
		</div>);
	}

}

function mapStateToProps(state: FlowEditorStateProps, ownProps: FlowEditorOwnProps): FlowEditorStateProps & FlowEditorOwnProps {
	return {
	};
}

export default withRouter(connect(mapStateToProps, {})(FlowEditor));