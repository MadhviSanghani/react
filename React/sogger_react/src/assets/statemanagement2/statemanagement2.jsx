import * as React from "react";
class Statexyz extends React.Component {
    state = {
        first: false,
        second: 3.14,
        third: "Slogger",
        fourth: "blue",
        fifth: "green",
    };
    constructor(){
        super();
        setTimeout (() => {
            this.setState({
                first: true,
                second: "22/7",
                third: "Beast",
                fourth: "red",
                fifth: "purple",
            });
        }, 3000);
    }
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
export default Statexyz;



// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import Statexyz from "./assets/statemanagement2/statemanagement2";

// // 1. class based component
// // 2. functional component
// // JSX Javascript XML
// // <DIV> JavaScript element in uppercase
// // <div> HTML element in lowercase

// createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <Statexyz />


//     </StrictMode>
// );