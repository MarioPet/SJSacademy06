import React from "react";

export class Input extends React.Component {
    render() {
        return (
            <p>
                <input 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    onChange={this.props.handleChange}
                />
                {this.props.name === "password" ?
                    <button onClick={this.props.togglePassword} className="eye-button" type="button">
                        <i className={"fa " + (this.props.type === "password" ? "fa-eye-slash" : "fa-eye")}></i> 
                    </button> : null}
            </p>
        )
    }
}