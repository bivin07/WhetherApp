import { useState } from 'react'

import './App.css'
import Whetherapp from './components/Whetherapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Whetherapp/>
     
    </>
  )
}

export default App
