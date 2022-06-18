// In React, data is passed from parent to child components via props, known as unidirectional data flow. The parent component cannot directly call a function defined in the child component or reach down to grab a value for itself.

// In certain circumstances, we want our parent component to reach down to the child component, getting data that originates in the child component for its own use. We can achieve this type of data flow with the useImperativeHandle Hook, which allows us to expose a value, state, or function inside a child component to the parent component through ref. You can also decide which properties the parent component can access, thereby maintaining the private scoping of the child component.

// syntax:
// useImperativeHandle(ref, createHandle, [dependencies])

// ref: the ref passed down from the parent component 
// createHandle: the value to be exposed to the parent component
// dependencies: an array of value that causes the hook to rerun when 

// this hook is very helpful when you dont want to introduce statemanagement hook

import React, { useRef } from 'react'
import Child from './Child'


const Parent = () => {
 const childRef = useRef(null)
  
  return (
    <div>
      <button onClick={
        ()=>{
          childRef.current.alterToggle()
        }
      }>
change State
      </button>
      <Child ref={childRef} />
    </div>
  )
}

export default Parent
