// It allows us to implement all of the lifecycle hooks from within a single function API

//It is use for side-effects

//examples of side effects are fetch requests, manipulating DOM directly , using async func like setTimeout.

//useffect takes 2 argumanet , a callback and a dependencies, the callback is a function that contains the sideeffects, the dependencies is an array of value that rerender the component only if the value changes.

// // this will run when the component mounts and anytime the stateful data changes
// React.useEffect(() => {
//     alert('Hey, Nads here!');
// });

// // this will run, when the component is first initialized
// React.useEffect(() => {
//     alert('Hey, Nads here!');
// }, []);

// // this will run only when count state changes
// React.useEffect(() => {
//     fetch('nads').then(() => setLoaded(true));
// }, [count]);

// // this will run when the component is destroyed or before the component is removed from UI.
// React.useEffect(() => {
//     alert('Hey, Nads here');

//     return () => alert('Goodbye Component');
// });


import React, { useState } from 'react'
import { useEffect } from 'react'

const Effect = () => {

    const [num, setNum] = useState(1);
    const [todo, setTodo] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(response => response.json())
        .then(json => setTodo(json.title))
    },[num]) //state changes only if num changes
  return (
    <div>
        <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>{todo}</p>
      <button onClick={() => setNum((num) => num + 1)}> add </button>
    </div>
    </div>
  )
}

export default Effect