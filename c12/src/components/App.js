import React from 'react';
import { Comments } from "./Comments";
import { Comment } from "./Comment";
import { connect } from "react-redux";
import { FetchComments } from "../actions/CommentActions";
import { Switch, Route, Link } from "react-router-dom";

export class App extends React.Component {

 componentDidMount() {
   this.props.FetchComments();
 }

  render() {
    return (
      <div id="app">
        <Link to="/comments">Comments</Link> <br /> <br />
        <Switch>
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/comments/:id" component={Comment} />
        </Switch>
      </div>
    )
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    FetchComments: () => {
      dispatch(FetchComments());
    }
  };
}

App = connect(null, MapDispatchToProps)(App);