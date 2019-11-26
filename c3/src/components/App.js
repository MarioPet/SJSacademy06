import React from "react";
import { User } from "./User";
 
export class App extends React.Component {
  render() {

    var user = {
      name: "Mario Petkovski",
      email: "mari5etkovski@gmail.com",
      jobOcupation: "Professional iceberg mover"
    }

    var colors = ["red", "green", "blue"];

    return (
      <div id="app">
        <h2>Hello World</h2>
        <User 
          person={user}
          date="11/23/2022"
          favoriteColors={colors}
        />
      </div>
    )
  }
}