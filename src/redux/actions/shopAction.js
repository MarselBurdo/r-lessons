import { createAction } from "@reduxjs/toolkit";

export const getItems = createAction("SHOP_GET_ITEMS");

export const notInterest = createAction("SHOP_NOT_INTEREST");

export const addItems = createAction("SHOP_ADD_BASKET");

export const removeItem = createAction("SHOP_REMOVE_ITEM");

export const purchaseItem = createAction("SHOP_PURCHASE_ITEM");
