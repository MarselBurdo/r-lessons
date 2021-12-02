import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootreducer";

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  devTools: true,
});
