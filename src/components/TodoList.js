import React from 'react'

const TodoList = ({ todos, handleComplete }) => {
    
    return (
        <div>
            <h2>Child Component</h2>

            {todos.map((todo, index) => (
                <ul key={index}>
                    <li>
                        {todo.text}

                        {!todo.completed && (
                            <button onClick={() => handleComplete(index)}>
                                Complete
                            </button>
                        )}
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default TodoList