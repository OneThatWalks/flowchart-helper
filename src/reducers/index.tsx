import { combineReducers } from 'redux';
// Import other reducers here
import projectReducer from './project';
import navbarReducer from './navbar';

const rootReducer = combineReducers({
    project: projectReducer,
    navbar: navbarReducer
});

export default rootReducer;