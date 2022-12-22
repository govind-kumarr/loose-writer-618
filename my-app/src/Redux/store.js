import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import {reducer as AdminReducer} from "./AdminPanel/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AuthReducer,AdminReducer });

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };
