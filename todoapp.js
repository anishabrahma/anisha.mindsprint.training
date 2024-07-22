import React, { useState } from 'react';

function TodoApp() {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
    };

    const addTodo = () => {
        if (todoInput.trim()) {
            setTodos([...todos, todoInput]);
            setTodoInput('');
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h3>Todo App</h3>
            <input
                type="text"
                placeholder="Enter a todo"
                value={todoInput}
                onChange={handleInputChange}
            />
            <button onClick={addTodo}>Add Todo</button>

            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Todo</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{todo}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                <button onClick={() => deleteTodo(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoApp;
