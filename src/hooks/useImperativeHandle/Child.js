import React, { useImperativeHandle,forwardRef } from 'react'

const Child = forwardRef((props,ref) => {
    const [toggle, setToggle] = React.useState(false)

   useImperativeHandle(ref,()=>({
     alterToggle(){
        setToggle(!toggle)
     }
   }))

  return (
    <div>
        <button>Toggle</button>
        {toggle && <h1>Hello</h1>}
    </div>
  )
})

export default Child