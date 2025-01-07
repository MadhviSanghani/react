import { useState } from 'react';

function StateExample3() {
    const [color, setColor] = useState("green");
    const [textweight, setTextweight] = useState("normal");
    const [textstyle, setTextstyle] = useState("normal");
    const [underline, setUnderline] = useState("none");

    return (
        <div>
            <input type="radio" name="color" value="Yellow" onChange={() => setColor("Yellow")} 
            />
            <label>Yellow</label>
            <br />
            <input type="radio" name="color" value="Red" onChange={() => setColor("Red")} 
            />
            <label>Red</label>
            <br />
            <input type="radio" name="color" value="Blue" onChange={() => setColor("Blue")} 
            />
            <label>Blue</label>
            <br />
            <input type="checkbox" name="bold" onChange={(e) => setTextweight(e.target.checked ? "bold" : "normal")} 
            />
            <label>bold</label>
            <br />
            <input type="checkbox" name="italic" onChange={(e) => setTextstyle(e.target.checked ? "italic" : "normal")} 
            />
            <label>italic</label>
            <br />
            <input type="checkbox" name="underline" onChange={(e) => setUnderline(e.target.checked ? "underline" : "none")} 
            />
            <label>underline</label>
            <br />
            <p style={{ color: color, fontWeight: textweight, fontStyle: textstyle, textDecoration:underline}}>This is the text content for display.</p>
        </div>
    );
}

export default StateExample3;
