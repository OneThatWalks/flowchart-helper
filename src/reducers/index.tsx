import { combineReducers } from 'redux';
// Import other reducers here
import projectReducer from './project';

const rootReducer = combineReducers({
    project: projectReducer
});

export default rootReducer;