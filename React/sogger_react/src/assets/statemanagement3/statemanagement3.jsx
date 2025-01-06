import * as React from "react";
class Statamerge extends React.Component {
    state = {
        first: "loading...",
        second: "loading...",
        third: "loading...",
        fourth: "loading...",
        cmplmsg: "loading done",
    };

    constructor(){
        super();
        setTimeout(() => {
            this.setState({first: "done"})
        }, 2000);

        setTimeout(() => {
            this.setState({second: "done"})
        }, 4000);

        setTimeout(() => {
            this.setState({third: "done"})
        }, 6000);

        setTimeout(() => {
            this.setState((state) => ({
                ...state,
                first: state.cmplmsg,
                second: state.cmplmsg,
                third: state.cmplmsg,
                fourth: state.cmplmsg,
            }));
        }, 8000);
    }

    render(){
        return (
            <div>
                <ul>
                    {Object.keys(this.state).filter((key) => keys !== "")}
                </ul>
            </div>
        )
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
export default Statamerge;