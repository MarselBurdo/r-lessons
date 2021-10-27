import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import AddItem from "./AddItem/AddItem";
import List from "./OrderList/List";
// import LiveCycle from "./LiveCycle";

export default function Order() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    //simple variation FETCH to API
    // const data = [
    //   { id: uuidv4(), text: "Milk", done: false },
    //   { id: uuidv4(), text: "Potato", done: true },
    //   { id: uuidv4(), text: "Carrot", done: false },
    // ];

    try {
      const data = JSON.parse(localStorage.items);

      if (!data) {
        setItems([]);
        return;
      }
      /**
       * изменили локальное сотсояние компонета см ниже
       */
      setItems([...data]);
    } catch (error) {
      console.log(error);
      setItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //   console.log(items);// выходит 2 раза

  return (
    <div>
      {/* <LiveCycle /> */}
      <List listItems={items} />
      <AddItem changeItems={setItems} items={items} />
    </div>
  );
}
