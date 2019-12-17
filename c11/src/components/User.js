import React from "react";
import { connect } from "react-redux";
import { SetFirstName } from "../actions/UserActions";

export class User extends React.Component {
    render() {
        return (
            <div className="user">
                <h2><code>NAME:</code> {this.props.firstName}</h2>
                <button onClick={this.props.SetFirstName}>Fill User Info</button>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    console.log(state);
    return {
        firstName: state.UserReducer.firstName
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        SetFirstName: () => {
            dispatch(SetFirstName());
        }
    }
}

User = connect(MapStateToProps, MapDispatchToProps)(User);