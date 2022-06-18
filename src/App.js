import React, { useContext } from 'react'
import { AppContext } from './hooks/useContext/ContextTest'

const App = () => {
  const {count} = useContext(AppContext)
  alert(count)
  return (
    <div>App</div>
  )
}

export default App