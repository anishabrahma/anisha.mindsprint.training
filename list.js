import React, { useState } from 'react';

function List() {
    const [list, setList] = useState([]);

    const adddata = (obj) => {
        setList([...list, obj]);
    };

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;