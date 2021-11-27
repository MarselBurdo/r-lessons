import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { basketReducer, shopDeskReducer } from "./reducers/shopReducer";

export const store = configureStore({
  reducer: {
    shopDesk: shopDeskReducer,
    basket: basketReducer,
  },
  preloadedState: {},
  middleware: [logger],
  devTools: true,
});

// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { rootReducer } from "./reducers/rootreducer";

// const initialStore = {
//   //   tasks: [],
//   count: {
//     counter: 0,
//     num: 10,
//     odd: { text: "textMe", error: "no error" },
//   },
//   notes: [],
//   //   auth: {
//   //     token: "",
//   //     username: "",
//   //   },
// };

// export const store = createStore(
//   rootReducer,
//   initialStore,
//   composeWithDevTools(applyMiddleware(logger))
// );
