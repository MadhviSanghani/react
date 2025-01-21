import { useState  } from "react";
import CancelRequest from "./cleanup";

const ShowUser = ({ var3 }) => ( var3 ? <CancelRequest/> : null);

function CustomComp () {
    const [show, setShow] = useState(false);
    return (
        <>
        <button onClick={() => setShow(!show)}>
            {show ? "Hide User" : "Show User"}
        </button>
        <ShowUser var3={show}/>
        </>
    );
}

export default CustomComp;