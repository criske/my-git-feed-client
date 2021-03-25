import { React, useEffect, useState } from 'react'

function App() {
    const [data, setData] = useState("Loading...");

    useEffect(() => {
        fetch('https://my-git-feed.herokuapp.com/api/github/repos',)
            .then(response => response.json())
            .then(data => {
                setData(JSON.stringify(data));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    return (
        <div className="my-align">
            {data}
        </div>
    );
}

export default App;
