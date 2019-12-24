import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Users extends React.Component {
  render() {
    return (
      <div id="comments">
        {
          this.props.users.length > 0 ?
            <ol>
                {this.props.users.map(user => {
                    return (
                        <li key={user.id}>
                            <h2>{user.name} <Link to={"users/" + user.id}>Details</Link></h2>
                        </li>
                    ) 
                })}
            </ol>
           : <h2>Loading Users...</h2>
        }    
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    users: state.UsersReducer.users,
  };
}

Users = connect(MapStateToProps, null)(Users);