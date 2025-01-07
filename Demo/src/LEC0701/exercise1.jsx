import * as React from "react";
const Arithmatic = ({value1, value2}) => {
    const add = value1 + value2;
    const sub = value1 - value2;
    const mul = value1 * value2;
    const divi = value1 / value2;

    return(
        <div>
            <p>
                addition = {add} <br />
                subtraction = {sub} <br />
                multiplication = {mul} <br />
                division = {divi}
            </p>
        </div>
    );
}
export default Arithmatic;