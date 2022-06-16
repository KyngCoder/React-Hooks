// This hook is similiar to setState
// It mimics how Redux works
// Instead of updating the state directly, you instead dispatch action that go to a reducer function and this function figure out, how to compute the next state

// action >> reducer >> store >> UI >> actions >>

// syntax:

// const [state, dispatch] = useReducer(reducer, initialState)

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { num: state.num + 1, text: true };
    default:
        return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { num: 0, text: false });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
    {state.text ? <p>{state.num} persons visited the store today</p> : <p>No one visited the store</p>} 
      <button onClick={() => dispatch({type: "INCREMENT"})}> add </button>
    </div>
  );
};

export default Reducer;
