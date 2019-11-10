import React, { Component } from "react";

class ExampleComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const { shopname } = this.props;
        return (
            <div>
                <h1> Hello Binch </h1>
                Store name is: {shopname}
            </div>
        );
    }
}
export default ExampleComponent;
