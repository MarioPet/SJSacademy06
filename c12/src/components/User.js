import React from "react";
import { connect } from "react-redux";

export class User extends React.Component {
    render() {
        console.log(this.props.users);
        return (
            this.props.users.length > 0 && this.props.usersMap !== undefined ?
            <table border="1" cellPadding="20">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Address Street</th>
                        <th>Address Suite</th>
                        <th>Address City</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.users[this.props.usersMap[this.props.match.params.id]].name}</td>
                        <td>{this.props.users[this.props.usersMap[this.props.match.params.id]].email}</td>
                        <td>{this.props.users[this.props.usersMap[this.props.match.params.id]].address.street}</td>
                        <td>{this.props.users[this.props.usersMap[this.props.match.params.id]].address.suite}</td>
                        <td>{this.props.users[this.props.usersMap[this.props.match.params.id]].address.city}</td>
                        <td>{this.props.users[this.props.usersMap[this.props.match.params.id]].phone}</td>
                        <td>{this.props.users[this.props.usersMap[this.props.match.params.id]].website}</td>
                        <td>{this.props.users[this.props.usersMap[this.props.match.params.id]].company.name}</td>
                    </tr>
                </tbody>

            </table> : <h2>Loading user...</h2>
        )
    }
}

const MapStateToProps = (state) => {
    return {
      users: state.UsersReducer.users,
      usersMap: state.UsersReducer.usersMap
    };
  }
  
User = connect(MapStateToProps, null)(User);