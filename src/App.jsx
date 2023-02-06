import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
