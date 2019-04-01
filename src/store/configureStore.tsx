import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers'
import { projectValidationMiddleware } from "../middleware";

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(projectValidationMiddleware)
    )
}

export default configureStore;