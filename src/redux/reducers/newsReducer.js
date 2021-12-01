import { GET_NEWS } from "../actionTypes";

export const newsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NEWS:
      return action.payload;

    default:
      return state;
  }
};
