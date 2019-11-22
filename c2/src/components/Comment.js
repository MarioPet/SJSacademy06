import React from "react";

export class Comment extends React.Component {
    render() {
        return (
            <div id="comment">
                <div id="user-info">
                    <img src={this.props.data.user.imageUrl} width="100" />
                    <span>{this.props.data.user.firstName}</span>
                </div>
                <div id="comment-date">
                    <h2>{this.props.data.date}</h2>
                </div>
                <div id="comment-content">
                    <p>{this.props.data.content}</p>
                </div>
            </div>
        );
    }
}