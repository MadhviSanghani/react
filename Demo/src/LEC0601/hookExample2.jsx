import {useState} from "react";
function StateExample2() {
    const [name, setName] = useState("rku");
    const [age, setAge] = useState(45);
    return (
        <div>
            <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            />
            <h2>{name}</h2>
            <input 
            type="text" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />
            <h2>{age}</h2>
        </div>
    );
}
export default StateExample2;