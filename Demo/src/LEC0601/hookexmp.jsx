import { userState } from "react";
function StatesExample() {
    const [name] = userState("RKU");
    return <div>{name}</div>;
}
export default StatesExample;