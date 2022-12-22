import { combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./reducer.js";

const rootReducer = combineReducers({ AuthReducer, ProductReducer });

const store = legacy_createStore(rootReducer);

export { store };
