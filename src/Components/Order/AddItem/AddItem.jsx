import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddItem({ changeItems, items }) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    if (!input) return alert("Write item");

    if (items && items.some((item) => item.text === input))
      return alert("This item in list. Change you chose");

    changeItems((prev) => [
      ...prev,
      { id: uuidv4(), text: input, done: false },
    ]);

    //clear input
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleOnClick}>
        Add Item
      </button>
    </div>
  );
}
