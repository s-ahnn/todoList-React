import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [haveTo, setHaveTo] = useState([]);

  return (
    <>
      <AddTodo setHaveTo={setHaveTo} haveTo={haveTo}/>
      <Todos haveTo={haveTo} setHaveTo={setHaveTo}/>
    </>
  )
}

export default App
