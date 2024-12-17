import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return 
    <div>
      <Todo id={1}/>
    </div>
  
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  // implement effect here 
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(response => {
      setTodo(response.data.todo)
    })
  })

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App
