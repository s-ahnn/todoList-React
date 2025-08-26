import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [haveTo, setHaveTo] = useState([]);

  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem('savedTodos');
  
      if (savedTodos) {
        const parsedTodo = JSON.parse(savedTodos);
        setHaveTo(parsedTodo);
      } else {
        setHaveTo([]);
      }
    } catch (e) {
      console.error("로컬스토리지 파싱 오류:", e);
      setHaveTo([]);
    }
  }, []);
  
  useEffect(() => {
    try {
      localStorage.setItem('savedTodos', JSON.stringify(haveTo));
    } catch (e) {
      console.error("로컬스토리지 저장 오류:", e);
    }
  }, [haveTo]);

  return (
    <>
      <h2 id='title'>To do List</h2>
      <AddTodo setHaveTo={setHaveTo} haveTo={haveTo}/>
      <Todos haveTo={haveTo} setHaveTo={setHaveTo}/>
    </>
  )
}

export default App
