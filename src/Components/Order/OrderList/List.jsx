import React, { useState } from "react";
import cn from "classnames";

import "./List.css";

import Item from "./Item";

export default function List({ listItems, onDelete, onPut }) {
  //clear input

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {listItems &&
          listItems.map(({ id, text, done }) => (
            <Item
              key={id}
              id={id}
              text={text}
              done={done}
              onDelete={onDelete}
              onPut={onPut}
            />
          ))}
      </ul>
    </div>
  );
}
