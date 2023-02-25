import React from "react";
import { useReducer } from "react";

const UseReducer = () => {
  const initial = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      case "reset":
        return 0;
      default:
        return 0;
    }
  };
  const [count, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => dispatch("add")}>Add</button>
      <button onClick={() => dispatch("sub")}>subtract</button>
      <button onClick={() => dispatch("reset")}>reset</button>

      <p>
        The useReducer Hook is the better alternative to the useState hook and
        is generally more preferred over the useState hook when you have complex
        state-building logic or when the next state value depends upon its
        previous value or when the components are needed to be optimized. <br/> The
        useReducer hook takes three arguments including reducer, initial state,
        and the function to load the initial state lazily.
      </p><br />
    </div>
  );
};

export default UseReducer;
