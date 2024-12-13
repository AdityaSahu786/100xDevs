import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([{
        title: "Go to gym",
        description: "Go to gym from 7-9pm",
        completed: false
    }, {
        title: "Study DSA",
        description: "Study DSA from 9-10 pm",
        completed: true
    }]);

   /* return (
        <div>
            {JSON.stringify(todos)}
        </div>
    ) */
   return (
    <div>
        <Todo title="Aditya" description="Aditya Sahu"></Todo>
    </div>
   )
}

function Todo(props) {
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}

export default App