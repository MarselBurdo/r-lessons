import { COUNT_INCREMENT, COUNT_MULTIPLY } from "../actionTypes";

export const countInc = (payload) => ({
  type: COUNT_INCREMENT,
  payload,
});

export const multiplyNum = () => ({
  type: COUNT_MULTIPLY,
  payload: 10,
});

export const concatText = (payload) => ({ type: "concat text", payload });
