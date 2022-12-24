import {legacy_createStore, applyMiddleware, compose, combineReducers  } from "redux" 
import thunk from "redux-thunk"
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import {reducer as AppReducer} from "./AppReducer/reducer";
import {reducer as AdminReducer} from "./AdminPanel/reducer";

const rootReducer = combineReducers({ AppReducer, AuthReducer,AdminReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)) );

export { store };