import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from './reducer'
// default state
const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState); // set the default state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const payload = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload });
      setName("")
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const removeItem = id => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const closeModal = () => {
      dispatch({ type: "CLOSE_MODAL" })
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      {state.people.map((person) => {
        const { name, id } = person;
        return (
          <>
            <div key={id} className="item">
              <h4>{name}</h4>
              <button className="btn" type="button" onClick={() => removeItem(id)}>remove</button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Index;
