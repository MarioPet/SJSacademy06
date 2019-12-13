import React from "react";
import { connect } from "react-redux";

import { SayHello } from "../actions/SayHelloAction";

export class Hello extends React.Component {

    componentDidMount() {
        this.props.SayHello();
    }

    render() {
        return (
            <div className="hello">
                <h2>Hello, {this.props.name}</h2>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        name: state.SayHelloReducer.name
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        SayHello: () => {
            dispatch(SayHello());
        }
    }
}

Hello = connect(MapStateToProps, MapDispatchToProps)(Hello);

