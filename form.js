import React, { useState } from 'react';

function Form(props) {
    const { adddata } = props;
    const [input, setInput] = useState('');

    const handleClick = () => {
        const newItem = { id: Date.now(), name: input };
        adddata(newItem);
        setInput(''); 
    };

    return (
        <div className="m-2 p-2" style={{ border: '2px solid red' }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter"
            />
            <button onClick={handleClick}>Add Data</button>
        </div>
    );
}

export default Form;
