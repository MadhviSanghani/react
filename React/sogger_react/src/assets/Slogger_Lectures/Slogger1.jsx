import * as React from "react";
class Component2 extends React.Component {
    render(){
        return (
            <h2>Component2</h2>
        );
    }
}

class Component3 extends React.Component {
    render(){
        return (
        <h3>Be Like a Beast</h3>
        );
    }
}

// each component must contain a render function 
class Slogger1 extends React.Component {
    render() {  
        return(
            <div>
                <h1>Hello</h1>
                <Slogger1/>
                <Component2/>
                <Component3/>
            </div>
        );
    }
}
export default  Slogger1;