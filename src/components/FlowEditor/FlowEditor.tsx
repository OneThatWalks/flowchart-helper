import React from 'react';
import { connect } from 'react-redux';

export interface FlowEditorOwnProps {
}

export interface FlowEditorStateProps {
}

export interface FlowEditorDispatchProps {
}

export type FlowEditorProps = FlowEditorStateProps & FlowEditorDispatchProps & FlowEditorOwnProps;

export interface FlowEditorState {
}

export class FlowEditor extends React.Component<FlowEditorProps, FlowEditorState> {

	render() {
		return (<div className="container"></div>);
	}

}

function mapStateToProps(state: FlowEditorStateProps, ownProps: FlowEditorOwnProps): FlowEditorStateProps & FlowEditorOwnProps {
	return {
	};
}

export default connect(mapStateToProps, {})(FlowEditor);