import { useState, useEffect } from "react";
import { Promise } from "bluebird";
Promise.config({cancellation: true});

function FetchUser(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({id: 1, name: "RKU Student"});
        },5000);
    })
}

function CancelRequest() {
    const [id, setId] = useState("Loading...");
    const [name, setName] = useState("Loading...");
    useEffect(() => {
        const promise = FetchUser().then((var1) => {
            setId(var1.id);
            setName(var1.name);
        });
        return () => {
            promise.cancel();
        };
    });
    return (
        <div>
            <h2>User ID: {id}</h2>
            <h2>User Name: {name}</h2>
        </div>
    );
}

export default CancelRequest;
