// This hook accepts one argument and returns a reference .
// A reference is an object having a special property current.
// the hook is used mainly to manipulate the DOM
// Rules about reference:
// The value of the reference stays the same between component re-rendering.

// Updating a reference dosen't trigger a component to re-render

// syntax: 
// cosnt reference = useRef(initialValue);


import React from 'react'
import { useRef } from 'react';

const Ref = () => {
    const inputRef = useRef(null);
  return (
    <div>
        <input type="text" ref={inputRef} placeholder="enter a text" />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
        {/* whenever you click on the button, the input will be focused */}
    </div>
  )
}

export default Ref