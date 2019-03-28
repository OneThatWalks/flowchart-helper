import { createStore, Reducer, AnyAction } from "redux";
import rootReducer from '../reducers'

const configureStore = () => {
    return createStore(
        rootReducer
    )
}

export default configureStore;