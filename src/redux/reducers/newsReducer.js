import { createReducer } from "@reduxjs/toolkit";
import { getNews } from "../actions/newsAction";

export const newsReducer = createReducer([], {
  [getNews.fulfilled]: (_, action) => action.payload,
});
