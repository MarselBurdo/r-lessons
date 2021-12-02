import SkeletonInput from "antd/lib/skeleton/Input";
import React, { useReducer, useState } from "react";

let x = 10;

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increment Counter":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "multiply NUM":
      return {
        ...state,
        num: state.num * action.payload,
      };
    case "concat text":
      return {
        ...state,
        odd: {
          ...state.odd,
          text: state.odd.text.concat(action.payload),
        },
      };
    default:
      return state;
  }
};

export default function CountNewsReducer() {
  const [input, setInput] = useState("Milk");
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    num: 10,
    odd: { text: "textMe", error: "no error" },
  });
  console.log(state);

  return (
    <div className={"Container-counter"}>
      <h2>Значение: {state.counter}</h2>
      <h2>Значение: {state.num}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        onClick={() => dispatch({ type: "increment Counter", payload: 1 })}
      >
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
      <button
        type="button"
        onClick={() => dispatch({ type: "multiply NUM", payload: 10 })}
      >
        Увеличить NUM
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "concat text", payload: input })}
      >
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
