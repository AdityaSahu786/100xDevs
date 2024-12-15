import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => {
     axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
         setTodos(response.data.todos)
      }) 
  }, [])

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </>
  )
}
  function Todo({title, description}) {
    return <div>
      <h1>{title}</h1>
      {description}
    </div>
  }
export default App
