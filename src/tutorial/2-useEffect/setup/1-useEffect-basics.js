import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState("");
  const [val, setVal] = useState("hello");
  
  useEffect(() => {
    document.title = `New message ${value}`;
    console.log("new effect");
    setShow("show after rendering");
  }, [value]); // value - dependency

  useEffect(() => {
    console.log(val)
  }, [val])

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click
      </button>
      <p>{show}</p>
    </>
  );
};

export default UseEffectBasics;
