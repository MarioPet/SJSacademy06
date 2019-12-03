import React from "react";
import { Input } from "./Input";

export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            passwordType: "password"
        }
    }

    InputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    TogglePassword = () => {
        this.setState({
            passwordType: this.state.passwordType === "text" ? "password" : "text"
        });
    }

    SubmitForm = (event) => {
        event.preventDefault();
        console.table(this.state);
    }

    render() {
        return (
            <div id="login">
                <form onSubmit={this.SubmitForm}>
                    <Input 
                        handleChange={this.InputChangeHandler}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <Input 
                        handleChange={this.InputChangeHandler}
                        name="password"
                        type={this.state.passwordType}
                        placeholder="Password"
                        togglePassword={this.TogglePassword}
                    />
                    <button className="action-button">Sign In</button>
                </form>
            </div>
        )
    }
}