import React from "react";

export class Movies extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.movies.map((movie, i) => {
                        return <li key={i}><h2>{movie}</h2></li>
                    })
                }
            </ul>
        )
    }
}