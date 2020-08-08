import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import dataReducer from "./reducers/dataReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  UI: uiReducer,
  data: dataReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
