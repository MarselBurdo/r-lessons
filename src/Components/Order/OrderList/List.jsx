import React from "react";
import cn from "classnames";

import "./List.css";

export default function List({ listItems }) {
  console.log(listItems);

  // if (Array.isArray(listItems))
  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {listItems &&
          listItems.map((el) => (
            <li key={el.id} className={cn("items", { "order-done": el.done })}>
              {el.text}
            </li>
          ))}
      </ul>
    </div>
  );
}
