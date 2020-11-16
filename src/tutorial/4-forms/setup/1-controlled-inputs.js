import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { firstName, email };
    setPeople((people) => {
      return [...people, person];
    });
    setEmail("");
    setFirstName("");
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="btn"
            type="button"
            onClick={handleSubmit}
            disabled={!email && !firstName ? true : false}
          >
            add person
          </button>
        </form>
        {people.map((person) => {
          const { email, firstName } = person;
          return (
            <>
              <div className="item">
                <p>{email}</p>
                <p>{firstName}</p>
              </div>
            </>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
