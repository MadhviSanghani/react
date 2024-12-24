import * as React from "react";

class HtmlComponents extends React.Component{
    render() {
        return(
            <div>
                <label htmlFor="">Textbox  </label>
                <input type="text" />
                <br /><br />
                <label htmlFor="">Checkbox  </label>
                <input type="checkbox" />
                <br /><br />
                <label htmlFor="">Radiobutton  </label>
                <input type="radio" />
                <br /><br />
                <label htmlFor="">Color  </label>
                <input type="color" />
                <br /><br />
                <label htmlFor="">File  </label>
                <input type="File" />
                <br /><br />
                <label htmlFor="">Date  </label>
                <input type="datetime-local" />
                <br /><br />
            </div>
        );
    }
}
export default HtmlComponents;