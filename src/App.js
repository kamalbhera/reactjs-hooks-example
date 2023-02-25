import "./App.css";
import UseMemo from "./Components/UseMemo";
import EffectHook from "./Components/EffectHook";
import { useState } from "react";
import UseReducer from "./Components/UseReducer";
import UseState from "./Components/UseState";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>React Interview </h1>
      <UseState />
      <hr />
      <UseMemo />
      <hr />

      <div className="useEffect">
        <h2>useEffect</h2>
        <button onClick={() => setShow(!show)}>Click to Unmount</button>
        {show ? <EffectHook /> : null}
        <br />
        <br />
      </div>

      <hr />
      <div className="useReducer">
        <h2>useReducer</h2>
        <UseReducer />
      </div>
    </div>
  );
}

export default App;
