import React, { useState } from "react";

const UseStateCounter = () => {
  let [value, setValue] = useState(0)

  const increment = () => {
    setValue(++value)
  }

  const decrement = () => {
    setValue(--value)
  }

  const reset = () => {
    setValue(0)
  }
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increment}>Increase</button>
        <button className="btn" onClick={decrement}>Decrease</button>
        <button className="btn" onClick={reset}>Reset</button>
      </section>
    </>
  );
};

export default UseStateCounter;
