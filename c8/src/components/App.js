import React from 'react';
import axios from "axios";
import { API_URL } from "../constants";
import { Users } from './Users';
import { Route, Switch, Link } from "react-router-dom";

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

    console.log("This comes from the Constructorot");
  }

  FetchPosts = () => {
    axios.get(API_URL + "/posts")
      .then(res => {
        this.setState({
          posts: res.data
        })
      }).catch(err => {
        console.error("Error in: => ", err);
      });
  }

  componentDidMount() {
    this.FetchPosts();
    // console.log("Component Did Mount");
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" render={() => {
            return <Users postslist={this.state.posts} />
          }} />
          {/* <Route path="/gallery" component={Gallery} /> */}
        </Switch>
      </div>
    )
  }
}