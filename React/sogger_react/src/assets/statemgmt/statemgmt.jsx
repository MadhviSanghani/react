import * as React from "react";
class StateABC extends React.Component {
    state = {
        first: false,
        second: 3.14,
        third: "Slogger",
        fourth: "blue",
        fifth: "green",
    };
    render(){
        const {first, second, third, fourth, fifth} = this.state;
        return (
            <div>
                <button disabled={first}>My Button</button>
                <p style={{color: fourth}}>The value of pie is: <strong>{second}</strong></p>
                <p style={{color: fifth}}>Hello {third}Boom!</p>
            </div>
        )
    }
}
export default StateABC;



// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import StateABC from "./assets/statemgmt/statemgmt";

// // 1. class based component
// // 2. functional component
// // JSX Javascript XML
// // <DIV> JavaScript element in uppercase
// // <div> HTML element in lowercase

// createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <StateABC />
//     </StrictMode>
// );
