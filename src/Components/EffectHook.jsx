import React, { useEffect, useState } from "react";

const EffectHook = () => {
  const [Name, setName] = useState("");

  const HandleInput = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("Behave like Did Mount");
    return () => {
      console.log('Behave like unmount');
    }
  }, []);



  useEffect(() => {
    console.log("Behave like didUpdate ");
  }, [Name]);

  return (
    <div>
      <p> The useEffect is used for causing side effects in functional components and it is also capable for handling componentDidMount, componentDidUpdate and componentWillUnmount life-cycle methods of class based components into functional component</p>
      <input type="text" value={Name} onChange={HandleInput} />
      <h3>{Name}</h3>
      <p>open console to see result</p>
    </div>
  );
};

export default EffectHook;
