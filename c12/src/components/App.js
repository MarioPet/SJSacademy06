import React from 'react';
import { Comments } from "./Comments";
import { Comment } from "./Comment";
import { Users } from "./Users";
import { User } from "./User";
import { connect } from "react-redux";
import { FetchComments } from "../actions/CommentActions";
import { FetchUsers } from "../actions/UsersActions";
import { Switch, Route, Link } from "react-router-dom";

export class App extends React.Component {
	componentDidMount() {
		this.props.FetchComments();
		this.props.FetchUsers();
	}

	render() {
    	return (
			<div id="app">
				<Link to="/comments">Comments</Link> | <Link to="/users">Users</Link> <br /> <br />
				<Switch>
					<Route exact path="/comments" component={Comments} />
					<Route path="/comments/:id" component={Comment} />
					<Route exact path="/users" component={Users} />
					<Route path="/users/:id" component={User} />
				</Switch>
			</div>
		)
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
		FetchComments: () => {
		dispatch(FetchComments());
		},
		FetchUsers: () => {
		dispatch(FetchUsers());
		}
	};
}

App = connect(null, MapDispatchToProps)(App);