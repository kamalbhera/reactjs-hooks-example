import React, { useState, useMemo } from "react";
import "../App.css";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const countValue = () => {
    return setCount(count + 1);
  };

  const delayCount = (num) => {
    console.log("count", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  const checkNum = useMemo(() => {
    return delayCount(count);
  }, [count]);

  return (
    <div className="useMemo">
      <h1>UseMemo</h1>
      <h4>
        The React useMemo Hook returns a memoized value. Think of memoization as
        caching a value so that it does not need to be recalculated
      </h4>
      <h2>{checkNum}</h2>
      <button onClick={countValue}>Increment</button>
      <p>
        The complex coding calculation of above code doesn't affecting the
        performance of below button because of useMemo.
      </p>

      <button onClick={() => setShow(!show)}>
        {show ? "Clicked me" : "click me"}
      </button>
    </div>
  );
};

export default UseMemo;
