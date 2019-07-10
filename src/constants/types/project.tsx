export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const ADD_REQUIREMENT = 'ADD_REQUIREMENT';
export const REMOVE_REQUIREMENT = 'REMOVE_REQUIREMENT';

export interface SetProjectAction {
	type: typeof SET_PROJECT_NAME;
	data: string;
}

export interface AddRequirementAction {
	type: typeof ADD_REQUIREMENT;
	data: Requirement;
}

export interface RemoveRequirementAction {
	type: typeof REMOVE_REQUIREMENT;
	data: Requirement;
}

export type ProjectActionTypes = SetProjectAction | AddRequirementAction | RemoveRequirementAction;

export interface ProjectState {
    /**
     * Name of the project
     */
	projectName: string;

    /**
     * Project requirements
     */
	requirements: Requirement[];

	/**
	 * Project Flows
	 */
	flows: Flow[];

	/**
	 * Services
	 */
	services: Service[];
}

export interface Requirement {
	id: number;
	name: string;
}

export interface Flow {
	id: number;
	name: string;
	serviceActionRelationships: ServiceAction[];
}

export interface ServiceAction {
	serviceFromId: number;
	serviceToId: number;
	actionId: number;
}

export interface Service {
	id: number;
	name: string;
	actions: Action[];
}

export interface Action {
	id: number;
	name: string;
	parameters: { [name: string]: string };
}