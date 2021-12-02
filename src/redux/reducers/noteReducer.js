import { GET_NOTES } from "../actionTypes";

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;

    default:
      return state;
  }
};
