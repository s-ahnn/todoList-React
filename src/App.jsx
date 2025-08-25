import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [haveTo, setHaveTo] = useState([]);

  return (
    <>
      <h2 id='title'>To do List</h2>
      <AddTodo setHaveTo={setHaveTo} haveTo={haveTo}/>
      <Todos haveTo={haveTo} setHaveTo={setHaveTo}/>
    </>
  )
}

export default App
