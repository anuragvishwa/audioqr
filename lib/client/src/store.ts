import { Store, createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { state, State } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});
export const store: Store<State> = createStore(
  state,
  composeEnhancers(applyMiddleware(reduxThunk))
);
