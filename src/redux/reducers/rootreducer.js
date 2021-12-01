import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { newsReducer } from "./newsReducer";
import { noteReducer } from "./noteReducer";

export const rootReducer = combineReducers({
  notes: noteReducer,
  news: newsReducer,
  count: countReducer,
  //   tasks: [],
  //   news: [],
});
