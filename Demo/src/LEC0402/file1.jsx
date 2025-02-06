//create 3 stage from with following elements
//Page 1. Ask user to enter Principle (10,000)
//Page 2. Ask user to enter rate of interest (7)
//Page 3. Ask user to enter Duration (1 year)
//Page 4. Show total amount including interest

import * as React from 'react';
export const UserContext = React.createContext();

export function Interest({children}){
    const [principle, setPrinciple] = React.useState();
    const [rate, setRate] = React.useState();
    const [duration, setDuration] = React.useState();

    return <UserContext.Provider value={{principle, setPrinciple, rate, setRate, duration, setDuration}}>{children}</UserContext.Provider>
}