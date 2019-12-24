import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Comments extends React.Component {
  render() {
    return (
      <div id="comments">
        {
          this.props.comments.length > 0 ?
          
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <th>ID</th>
                <th>E-mail</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
            {this.props.comments
            .slice(0, 50)
            .map(comment => {
              return (
                <tr key={comment.id}>
                  <td>{comment.id}</td>
                  <td>{comment.email}</td>
                  <td><Link to={"comments/" + comment.id}>Edit</Link></td>
                </tr>
              )
              })}
            </tbody>
          </table> : <h2>Loading Comments...</h2>
        }    
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    comments: state.CommentReducer.comments,
    commentError: state.CommentReducer.error
  };
}

Comments = connect(MapStateToProps, null)(Comments);