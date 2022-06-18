import { useEffect,useLayoutEffect, } from "react"

// This hook is used to handle sideeffects just like useEffect
// It gets triggered synchronously. In other words, it doesn't care if the DOM has painted the screen.

// //this can cause perfomance issues since the react app has to wait for something to be finished


import React from 'react'

const LayoutEffect = () => {



useEffect(()=>{
    console.log('hey')
},[])

useLayoutEffect(() => {
    console.log('bye')
},[])

  return (
    <div>
    <h1>Welcome</h1>
    </div>
  )
}

export default LayoutEffect