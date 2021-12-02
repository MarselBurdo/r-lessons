import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/actions/shopAction";
import { seedItems } from "../../utils/seed";
import Basket from "./Basket";
import ShopCard from "./ShopCard";

export default function Shop() {
  const dispatch = useDispatch();
  const shopItems = useSelector((state) => state.shopDesk.items);

  useEffect(() => {
    dispatch(getItems(seedItems()));
  }, [dispatch]);

  return (
    <>
      <Basket />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {shopItems?.map((el) => (
          <ShopCard info={el} key={el.id} />
        ))}
      </div>
    </>
  );
}
