import React from "react";

export class HasVacancy extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.rooms 
                    ? 
                    <h2>We HAVE available rooms!</h2> 
                    : 
                    <h2>We DON'T have available rooms</h2>
                }
            </div>
        )
    }
}