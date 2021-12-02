import { createReducer } from "@reduxjs/toolkit";
import {
  getItems,
  notInterest,
  addItems,
  removeItem,
  purchaseItem,
} from "../actions/shopAction";

export const shopDeskReducer = createReducer(
  { items: [], notIds: [] },
  {
    [getItems]: (state, action) => ({ ...state, items: [...action.payload] }),
    [notInterest]: (state, action) => ({
      ...state,
      notIds: [...state.notIds, action.payload],
    }),
  }
);

export const basketReducer = createReducer(
  { orderList: [] },
  {
    [addItems]: (state, { payload }) => {
      if (state.orderList.some((el) => el.id === payload.id)) {
        return {
          orderList: state.orderList.map((curEl) => {
            if (curEl.id === payload.id) {
              const el = { ...curEl };
              el.count += 1;
              return el;
            }
            return curEl;
          }),
        };
      }

      const orderItem = { ...payload };
      orderItem.count = 1;
      return {
        orderList: [...state.orderList, orderItem],
      };
    },
    [removeItem]: (state, { payload }) => ({
      orderList: state.orderList.filter((el) => el.id !== payload),
    }),
    [purchaseItem]: (state, { payload }) => {
      return {
        orderList: state.orderList.map((curEl) => {
          if (curEl.id === payload) {
            const el = { ...curEl };
            el.count += 1;
            return el;
          }
          return curEl;
        }),
      };
    },
  }
);
