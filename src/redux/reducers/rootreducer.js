import { combineReducers } from "@reduxjs/toolkit";
import { errorReducer } from "./errorReducer";
import { loadingReducer } from "./loadingReducer";
import { newsReducer } from "./newsReducer";
import { basketReducer, shopDeskReducer } from "./shopReducer";

export default combineReducers({
  shopDesk: shopDeskReducer,
  basket: basketReducer,
  news: newsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
