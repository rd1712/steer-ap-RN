import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import createCLILogger from "../logger/redux";

import sessionReducer from "./reducers/session";

const logger = createCLILogger({
  predicate: (getState, action) => !action.MONITOR_ACTION,
});

const rootReducer = combineReducers({
  session: sessionReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));
export default store;
