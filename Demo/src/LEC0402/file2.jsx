import * as React from "react";
import { Interest, UserContext } from "./file1";

export function Page1() {
    return (
        <div>
            <label>Enter principle: </label>
            <input type="text" />
        </div>
    );
}

export function Page2() {
    return (
        <div>
            <label>Enter rate: </label>
            <input type="text" />
        </div>
    );
}

export function Page3() {
    return (
        <div>
            <label>Enter time: </label>
            <input type="text" />
        </div>
    );
}

export function Page4() {
    return (
        <Interest>
            
        </Interest>
    );
}