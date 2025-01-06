import { useState } from "react";
function StatesExample() {
    const [name] = useState("RKU");
    return (
    <div>{name}</div>
);
}
export default StatesExample;