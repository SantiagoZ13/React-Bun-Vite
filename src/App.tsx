import { useState } from "react"
import './App.css'
import { Button } from "./components/Button"

function App() {
  const [count, setCount] = useState(0)
  const addOne = () => {
    setCount((count) => count + 1)
  }
  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={addOne}></Button>
    </>


  )
}

export default App
