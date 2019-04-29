import { SET_PROJECT_NAME, ProjectActionTypes } from "../constants/types";

export function setProjectName(projectName: string): ProjectActionTypes {
    return {
        type: SET_PROJECT_NAME,
        data: projectName
    }
}