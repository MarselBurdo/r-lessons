import { COUNT_CONCAT, COUNT_INCREMENT, COUNT_MULTIPLY } from "../actionTypes";

const initialState = {
  counter: 0,
  num: 10,
  odd: { text: "textMe", error: "no error" },
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case COUNT_MULTIPLY:
      return {
        ...state,
        num: state.num * action.payload,
      };
    case COUNT_CONCAT:
      return {
        ...state,
        odd: {
          ...state.odd,
          text: state.odd.text.concat(action.payload),
        },
      };
    default:
      return state;
  }
};
