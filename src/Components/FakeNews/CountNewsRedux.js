import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  concatText,
  countInc,
  multiplyNum,
} from "../../redux/actions/countAction";

let x = 10;

export default function CountNewsRedux() {
  const [input, setInput] = useState("Milk");
  const { counter, num, odd } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className={"Container-counter"}>
      <h2>Значение COUNTER: {counter}</h2>
      <h2>Значение NUM: {num}</h2>
      <h2>Значение ODD: {odd.text}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={() => dispatch(countInc(2))}>
        Увеличить
      </button>
      <button
        type="button"
        onClick={() => {
          x += 10;
          console.log("button x", x);
        }}
      >
        Увеличить X
      </button>
      <button type="button" onClick={() => dispatch(multiplyNum())}>
        Увеличить NUM
      </button>
      <button type="button" onClick={() => dispatch(concatText(input))}>
        Concat TEXT
      </button>
    </div>
  );
}

/**
 *
 * Structure Redux
 *
 *
 * project
 * ------- section
 * ---------------registry
 * -----------------------events
 * -----------------------------data
 */
