import React, { useCallback, useMemo, useRef, useState } from "react";

let x = 10;

export default function CountNews() {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(1);

  // const getNumber = () => {
  //   // bad practice
  //   console.log("Trigger number");
  //   return Math.round(Math.random() * 1000) * x;
  // };

  const getNumber = useMemo(() => {
    // console.log("Trigger number useMemo");
    return Math.round(Math.random() * 1000) * x * num;
  }, [num]);

  //   const multStates = () => {
  //       // bad practice
  //     console.log("Trigger states");
  //     return 1000 * num * counter;
  //   };

  const multStates = useCallback(() => {
    // console.log("Trigger states useCallback");
    return 1000 * num;
  }, [num]);

  const statesRef = useRef(multStates);

  //   console.log(statesRef.current);

  console.log(statesRef.current === multStates);

  return (
    <div className={"Container-counter"}>
      <h2>Значение: {counter}</h2>
      {/* <h2>Memo value: {getNumber()}</h2> */}
      <h2>Memo value: {getNumber}</h2>
      <h2>useCalback value: {multStates()}</h2>
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
      <button
        type="button"
        onClick={() => setNum((prevCount) => prevCount * 10)}
      >
        Увеличить NUM
      </button>
    </div>
  );
}

// Как реализовать useCallback через useMemo

/**
 * обычно useMemo возвращает значение; но в ему без разницы что возвращать
 * 
 * const getNumber = useMemo(() => {
    
    return ()=>{ return Math.round(Math.random() * 1000) * x * num;}
  }, [num]);
 * 
  getNumber()
 */
