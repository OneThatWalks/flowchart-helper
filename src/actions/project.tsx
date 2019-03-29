import { SET_PROJECT_NAME } from "../constants/types";

export function setProject(projectName: string) {
    return {
        type: SET_PROJECT_NAME,
        data: projectName
    }
}