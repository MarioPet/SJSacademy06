import React from "react";
import axios from "axios";

export class Comment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: undefined
        }
    }

    FetchComment = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments/" + this.props.match.params.id)
            .then(res => this.setState({ comment: res.data }))
            .catch(err => console.error(err));
    }

    componentDidMount() {
        this.FetchComment();
    }

    render() {
        return (
            this.state.comment !== undefined ?
            <div className="single-comment">
                <h2>{this.state.comment.email}</h2>
                <p>{this.state.comment.body}</p>
                <a href={"mailto:" + this.state.comment.email}>{this.state.comment.email}</a>
            </div> : <h2>Loading comment...</h2>
        )
    }
}