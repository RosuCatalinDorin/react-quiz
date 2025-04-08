import React, { useState, useEffect } from 'react';

const mycompoenet = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default mycompoenet;