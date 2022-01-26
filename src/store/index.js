import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as types from "./types";

import createCLILogger from "../logger/redux";

import sessionReducer from "./reducers/session";
import metadataReducer from "./reducers/metadata";
import onboardingReducer from "./reducers/onboarding";

const logger = createCLILogger({
  predicate: (getState, action) => !action.MONITOR_ACTION,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  session: sessionReducer,
  metadata: metadataReducer,
  onboarding: onboardingReducer,
});

const rootReducer = (state, action) => {
  if (action.type === types.SESSION_LOGOUT) {
    persistConfig.storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk, logger));

export const persistor = persistStore(store);
export default store;
