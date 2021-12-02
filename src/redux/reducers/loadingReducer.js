import { createReducer } from "@reduxjs/toolkit";
import { getNews } from "../actions/newsAction";

export const loadingReducer = createReducer(false, {
  [getNews.pending]: () => true,
  [getNews.fulfilled]: () => false,
});
