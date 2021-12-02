import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchaseItem, removeItem } from "../../redux/actions/shopAction";

export default function Basket() {
  const orderList = useSelector((state) => state.basket.orderList);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: "honeydew" }}>
      <ul>
        {orderList?.map(({ title, id, price, count }) => (
          <li
            key={id}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{title}</span>
            <span style={{ color: "red" }}>
              {count}
              <button onClick={() => dispatch(purchaseItem(id))}>+</button>
            </span>
            <span>{price}</span>
            <button onClick={() => dispatch(removeItem(id))}>Delete</button>
          </li>
        ))}
      </ul>

      <span>
        Total order:{" "}
        {orderList?.reduce((acc, curr) => (acc += curr.price * curr.count), 0)}{" "}
        $
      </span>
    </div>
  );
}
