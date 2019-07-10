import React from 'react';
import { Service, Action } from "../constants/types/project";
import * as SRD from 'storm-react-diagrams';
require("storm-react-diagrams/dist/style.min.css");

/**
 * Contract for service interaction
 */
export interface IServicesService {
	addService(name: string): void;
	removeService(id: number): void;
	editService(id: number, name: string): void;
	getService(id: number): Service;
}

export interface IServiceActionService {
	addAction(action: string, parameters?: { [name: string]: string }): void;
	removeAction(id: number): void;
	editAction(id: number): void;
	getAction(id: number): Action;
}

export interface IFlowActionService {
	addActionServiceRelationship(serviceIdFrom: number, serviceIdTo: number, action: number): void;
	removeActionServiceRelationship(serviceIdFrom: number, serviceIdTo: number, action: number): void;
}

export interface IFlowService {
	getCanvas(): JSX.Element;
}

export class FlowService implements IFlowService {


	private _canvasWrapper : ICanvasWrapper;


	constructor() {
		this._canvasWrapper = new CanvasWrapper();
	}

	getCanvas(): JSX.Element {
		return this._canvasWrapper.getCanvas();
	}
}

export interface ICanvasWrapper {
	getCanvas(): JSX.Element;
}

export class CanvasWrapper implements ICanvasWrapper {
	getCanvas(): JSX.Element {
		// 1) setup the diagram engine
		var engine = new SRD.DiagramEngine();
		engine.installDefaultFactories();

		// 2) setup the diagram model
		var model = new SRD.DiagramModel();

		// 3) create a default node
		var node1 = new SRD.DefaultNodeModel("Node 1", "rgb(0,192,255)");
		let port1 = node1.addOutPort("Out");
		node1.setPosition(100, 100);

		// 4) create another default node
		var node2 = new SRD.DefaultNodeModel("Node 2", "rgb(192,255,0)");
		let port2 = node2.addInPort("In");
		node2.setPosition(400, 100);

		// 5) link the ports
		let link1 = port1.link(port2);

		// 6) add the models to the root graph
		model.addAll(node1, node2, link1);

		// 7) load model into engine
		engine.setDiagramModel(model);

		return (<SRD.DiagramWidget diagramEngine={engine} className="border" />);
	}
}

/*
export class FlowService implements IFlowService {


	constructor(public flow: Flow, public services: Service[]) {

	}

	addService(name: string): void {
		if (!this.services.find(s => s.name === name)) {
			const maxServiceId: number = Math.max(...this.services.map(t => t.id)) + 1;

			this.services.push({
				id: maxServiceId,
				actions: [],
				name: name
			});
		}
	}

	removeService(id: number): void {
		// Will need to protect against existing relationships involving service
		const index = this.services.findIndex(s => s.id === id);
		if (index > -1) {
			this.services.splice(index, 1);
		}
	}

	addAction(serviceIdFrom: number, serviceIdTo: number, action: any, parameters: { [name: string]: string } = {}): void {
		const serviceFrom = this.services.find(s => s.id === serviceIdFrom);
		const serviceTo = this.services.find(s => s.id === serviceIdTo);
		let createdOrFoundAction: Action;

		if (!serviceFrom || !serviceTo) {
			throw new Error('One or more specified services do not exist');
		}

		if (typeof action === 'number') {
			const foundAction = serviceTo.actions.find(a => a.id === action as number);

			if (!foundAction) {
				throw new Error('Action was not found on destination service');
			}

			createdOrFoundAction = foundAction;
		} else {
			const maxActionId: number = Math.max(...serviceTo.actions.map(s => s.id)) + 1;
			createdOrFoundAction = {
				id: maxActionId,
				name: action as string,
				parameters: parameters
			};

			serviceTo.actions.push(createdOrFoundAction);
		}

		this.flow.serviceActionRelationships.push({
			actionId: createdOrFoundAction.id,
			serviceFromId: serviceFrom.id,
			serviceToId: serviceTo.id
		})
	}

	removeAction(action: string): void {
		throw new Error("Method not implemented.");
	}

}
*/