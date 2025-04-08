import React, { useState } from 'react';

const Component1 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    if (!data && !loading) {
        setLoading(true);
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }

    return (
        <div>
            {loading ? 'Loading...' : <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default Component1;