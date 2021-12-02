import { Card } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, notInterest } from "../../redux/actions/shopAction";

export default function ShopCard(props) {
  const { title, id, description, price } = props.info;

  const dispath = useDispatch();

  const ids = useSelector((state) => state.shopDesk.notIds);
  return (
    <Card
      title={title}
      style={{
        width: "300px",
        margin: "20px",
        justifyContent: "space-between",
        backgroundColor: ids?.some((el) => el === id) ? "red" : "white",
      }}
    >
      <p>{description}</p>
      <span style={{ color: "grey", fontSize: "9px" }}>
        price item: {price} $
      </span>
      <br />
      <button onClick={() => dispath(addItems({ title, id, price }))}>
        Add Basket
      </button>
      <button onClick={() => dispath(notInterest(id))}>Don't interest</button>
    </Card>
  );
}
