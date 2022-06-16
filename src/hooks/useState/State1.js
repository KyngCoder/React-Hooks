// this hook acts like a variable in react,
// the purpose of this hook is to handle the changing of data. Any data that changes in react is called state, when any of the data changes react re renders the UI.

// The useState hook takes one argument, the initial value of the state.It then returns an array containing two values: the current state and a function that allows you to update the state.

//syntax: const [//name of variable, //function to change variable] = useState(//initial value of variable);

import React from "react";
import { useState } from "react";

const State1 = () => {
  const [num, setNum] = useState(0);
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
      <p>{num} persons visited the store today</p>
      <button onClick={() => setNum((num) => num + 1)}> add </button>
    </div>
  );
};

export default State1;
