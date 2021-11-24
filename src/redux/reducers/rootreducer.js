import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { noteReducer } from "./noteReducer";

export const rootReducer = combineReducers({
  notes: noteReducer,
  //   auth: {},
  count: countReducer,
  //   tasks: [],
  //   news: [],
});
