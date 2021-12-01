import { createReducer } from "@reduxjs/toolkit";
import { getNews } from "../actions/newsAction";

export const errorReducer = createReducer(null, {
  [getNews.rejected]: (_, payload) => payload,
});
