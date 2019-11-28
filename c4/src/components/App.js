import React from "react";

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      userName: ""
    }

  }

  EmailChangeHandler = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  UserNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return(
      <div>
        <input 
          value={this.state.email} 
          type="text" 
          placeholder="Enter your e-mail"
          onChange={this.EmailChangeHandler}
        />
        <h2>{this.state.email}</h2>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={this.UserNameChangeHandler}
          value={this.state.userName}
        />
      <h2>{this.state.userName}</h2>
      </div>
    )
  }
}