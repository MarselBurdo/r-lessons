import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootreducer";
import thunk from "redux-thunk";

import logger from "redux-logger";

const initialStore = {
  news: [],
  count: {
    counter: 0,
    num: 10,
    odd: { text: "textMe", error: "no error" },
  },
  notes: [],
  //   auth: {
  //     token: "",
  //     username: "",
  //   },
};

export const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
