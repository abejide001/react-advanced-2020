import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("femi")
  const [age, setAge] = useState("21")
  const [message, setMessage] = useState("femi is a foo")

  const changeMessage = () => {
    setMessage("thi is")
  }

  const setBack = () => {
     console.log(message)
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{message}</h3>
      <h3>{age}</h3>
      <button className="btn" onClick={changeMessage}>change message</button>
      <button className="btn" onClick={setBack}>set back</button>
    </>
  );
};

export default UseStateObject;
