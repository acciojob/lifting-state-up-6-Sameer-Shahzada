
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a React app', completed: false },
    { text: 'Deploy the React app', completed: false }
  ]);

  const handleComplete = () => {
    const updatedTodos = todos.map(todo => ({
      ...todo,
      completed: true
    }));

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
