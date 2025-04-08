import React, { useState, useEffect } from 'react';
import './style.css'; // Importăm fișierul CSS

const BadComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    });

    return (
        <div style={{ border: '5px dashed purple', padding: '20px' }}>
            {data ? (
                <div>
                    {data.map((item) => (
                        <div style={{ backgroundColor: 'lightgray' }}>
                            <h1>{item.name}</h1>
                            <p>{item.email}</p>
                            <p>{item.username}</p>
                            <p>{item.address.street}, {item.address.city}</p>
                            <p>{item.phone}</p>
                            <p>{item.website}</p>
                            <p>{item.company.name}</p>
                        </div>
                    ))}
                </div>
            ) : 'Loading...'}
        </div>
    );
};

export default BadComponent;