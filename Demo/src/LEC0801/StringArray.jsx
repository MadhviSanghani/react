// pass arry of string as arguments  convert array to unnoderd list  

import * as React from 'react';

class StringList extends React.Component {
    state ={
        var1 :["a","b","c","d","e","f"]
    };
    constructor(){
        super();
        setTimeout(()=>{
            this.setsState({var1:["a","b","c","d","e","f"]});

        },1000);

    }
    render(){
        return (
            <div>
                <ul>
                    {this.state.var1.map((item,index)=><li key={index}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

export default StringList;