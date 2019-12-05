import React from 'react';
import { Todos } from "./Todos";

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      days: [
        "monday",
        "tuesday",
        "wednesday"
      ],
      person: {
        name: "Mario Petkovski",
        email: "mario5etkovski@gmail.com"
      },
      todos: [
        {
          id: 1,
          todo: "Drink Water"
        },
        {
          id: 2,
          todo: "Learn React"
        },
        {
          id: 3,
          todo: "Walk the dog"
        },
      ],
      todoItem: ""
    }
  }

  AddThursday = () => {
    this.setState(prevState => ({
      days: [
        ...prevState.days, 
        "Thursday", "Friday", 
      ]
    }));
  }

  ChangeEmail = (email, name) => {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        email: email,
        name: name
      }
    }));
  }

  TodoChangeHandler = (e) => {
    this.setState({
      todoItem: e.target.value
    });
  }

  AddTodo = (todoitem) => {
    let item = {
      id: this.state.todos.length + 1,
      todo: todoitem
    }

    this.setState(prevState => ({
      todos: [
        item,
        ...prevState.todos
      ],
      todoItem: ""
    }));
  }

  render() {
    console.log("STATEEEE => ", this.state);
    return (
      <div>

        {/* WORKING WITH ARRAYS AND OBJECTS IN REACT STATE */}

        {/* <button onClick={this.AddThursday}>Add Thursday</button> <br /> <hr />
        <button onClick={() => this.ChangeEmail("mario@semos.com.mk", "Pero Perovski")}>Change E-mail</button> */}

        {/* A SIMPLE TODO APP */}
        <div>
          <input 
            placeholder="Your TO DO for the day..."
            value={this.state.todoItem}
            onChange={this.TodoChangeHandler}
          /> &nbsp;
          <button onClick={() => this.AddTodo(this.state.todoItem)}>+ ADD TO DO</button>
          <hr />
          <Todos todolist={this.state.todos} />
        </div>
      </div>
    )
  }
}
