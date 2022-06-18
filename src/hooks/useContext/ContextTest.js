import React,{createContext, useState} from 'react'

export const AppContext = createContext()


const ContextTest = ({children}) => {
  const [count, setCount] = useState(0)
  
  return (
    <AppContext.Provider value={{count, setCount}}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextTest