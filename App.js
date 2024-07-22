// app.js

import React, { useState } from 'react';
import Counter from './components/counter';
import Register from './register';
import TodoApp from './todoapp'; // Import the TodoApp component

function App() {
    const [name, setName] = useState('Anisha');
    const changeName = () => {
        setName('Mindsprint');
    };

    return (
        <div>
            <h1>Welcome {name}</h1>
            <button onClick={changeName}>Change</button>
            <Counter />
            <Register />
            <TodoApp /> {/* Render the TodoApp component */}
        </div>
    );
}

export default App;
