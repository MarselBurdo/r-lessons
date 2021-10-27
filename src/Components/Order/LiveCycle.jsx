import React, { useEffect, useState } from "react";

let x = 0;

export default function LiveCycle() {
  /**
   * Объявляем state
   *  аналог записи state ниже
  const [liveCycleState, setLiveCycleState] = useState({
    counter: 0,
    show: false,
  });
   */
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  console.log("Render in Conponent");

  useEffect(() => {
    /**
     * тут обычно делается запрос на API(бэкенд)
     */
    console.log("This useEffect like componentDidMount, render once");

    // setShow(true);
  }, []);

  useEffect(() => {
    console.log(
      "This useEffect like componentDidUpdate, render which counter change",
      counter
    );
  }, [counter]);

  useEffect(() => {
    console.log(
      "This useEffect like componentDidUpdate, render which show change",
      show
    );
  }, [show]);

  useEffect(() => {
    console.log("useEffect no dependency");
  });

  useEffect(() => {
    console.log("useEffect x", x);
  }, [x]);

  useEffect(() => {
    return () => {
      console.log(
        "This useEffect like componentDidUnmount render in component die"
      );
    };
  }, []);

  return (
    <>
      {" "}
      <h2>Значение: {counter}</h2>
      <button
        type="button"
        onClick={() => setCounter((prevCount) => prevCount + 1)}
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
    </>
  );
}
