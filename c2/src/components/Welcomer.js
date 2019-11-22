import React from "react";

export class Welcomer extends React.Component {
    render() {
        console.log(this.props);
        return <h2>Welcome to React, {this.props.name}!</h2>
    }
}