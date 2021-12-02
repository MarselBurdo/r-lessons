import React, { useState } from "react";
import cn from "classnames";
import { api } from "../common.api";

export default function Item({ id, text, done, onDelete, onPut }) {
  const [inputValues, setInputValues] = useState({ input: "", old: "" });
  const [isShow, setIsShow] = useState(false);

  const onDeleteClick = async (id) => {
    console.log(id);

    const fetchData = await api.delete(id);
    if (fetchData.success) {
      onDelete(id);
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnClick = async (e) => {
    e.preventDefault();

    if (!inputValues.input) return alert("Write item");

    // if (items && items.some((item) => item.text === input))
    //   return alert("This item in list. Change you chose");
    // // fetch-PUT
    const fetchData = await api.put(id, {
      text: inputValues.input,
      done: true,
    });

    if (fetchData.success) {
      onPut({ id: fetchData.data.id, input: inputValues.input });
      setInputValues({ input: "", old: "" });
      setIsShow((prev) => !prev);
    }
  };

  return (
    <li className={cn("items", { "order-done": done })}>
      <div>{text}</div>
      <button type="button" onClick={() => onDeleteClick(id)}>
        Delete
      </button>

      {isShow ? (
        <form onSubmit={handleOnClick}>
          <input
            type="text"
            name="input"
            value={inputValues.input}
            onChange={onInputChange}
          />
          <input
            type="text"
            name="old"
            value={inputValues.old}
            onChange={onInputChange}
          />
          <button type="submit">Edit Item</button>
        </form>
      ) : (
        <button type="button" onClick={() => setIsShow((prev) => !prev)}>
          Edit
        </button>
      )}
    </li>
  );
}
