import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootreducer";

import logger from "redux-logger";

const initialStore = {
  //   tasks: [],
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
  composeWithDevTools(applyMiddleware(logger))
);
