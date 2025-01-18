import * as React from 'react';
function fetchuserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({x:'Madhvi Sanghani', y:1});  
        }, 5000);
    });
}

function ApiSimulation() {
    const [name, setName] = React.useState("Loading...");
    const [id, setId] = React.useState("Loading...");
    React.useEffect(() => {
        fetchuserData().then((abc) => {
            setName(abc.x);
            setId(abc.y);
        });
    });

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Id: {id}</h2>
        </div>
     );
}

export default ApiSimulation;


