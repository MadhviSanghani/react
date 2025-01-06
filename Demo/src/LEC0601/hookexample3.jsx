import { useState } from 'react';

function StateExample3() {
    const [color, setColor] = useState("green");
    const [textweight, setTextweight] = useState("");
    const [textstyle, setTextstyle] = useState("");
    const [unserline, setUnderline] = useState("");

    return (
        <div>
            <input 
                type="radio" 
                name="color" 
                value="Yellow" 
                checked={color === "Yellow"} 
                onChange={() => setColor("Yellow")} 
            />
            <label>Yellow</label>
            <br />
            <input 
                type="radio" 
                name="color" 
                value="Red" 
                checked={color === "Red"} 
                onChange={() => setColor("Red")} 
            />
            <label>Red</label>
            <br />
            <input 
                type="radio" 
                name="color" 
                value="Blue" 
                checked={color === "Blue"} 
                onChange={() => setColor("Blue")} 
            />
            <label>Blue</label>
            <br />
            <input 
            type="radio" 
            name="bold"
            onChange={() => setTextweight("bold")} 
            />
            <label>bold</label>
            <br />
            <input 
            type="radio" 
            name="italic"
            onChange={() => setTextstyle("italic")} 
            />
            <label>italic</label>
            <br />
            <input 
            type="radio" 
            name="underline"
            onChange={() => setUnderline("underline")} 
            />
            <label>underline</label>
            <br />
            <p style={{ color: color, fontWeight: textweight, fontStyle: textstyle, textDecoration:unserline}}>This is the text content for display.</p>
        </div>
    );
}

export default StateExample3;
