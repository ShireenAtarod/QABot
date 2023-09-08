import { useState } from 'react'
import Home from './pages/Home'
import './styles/main.scss'
import "@fontsource/alfa-slab-one";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  )
}

export default App
