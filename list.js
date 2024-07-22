import React, { useState } from 'react';
import Form from './form'; 
import Details from './details'; 

function List() {
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState(null);

    const adddata = (obj) => {
        setList([...list, obj]);
    };

    return (
        <div className="m-2 p-2" style={{ border: '2px solid green' }}>
            <ul>
                {list.map((item) => (
                    <li key={item.id} onClick={() => setSelected(item)}>
                        {item.name}
                    </li>
                ))}
            </ul>
            <Form adddata={adddata} />
            {selected && <Details data={selected} />}
        </div>
    );
}

export default List;
