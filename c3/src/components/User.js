import React from "react";
import PropTypes from "prop-types"; 

export class User extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div id="user">
                <h2>{this.props.person.name}</h2>
                <a href="http://www.google.com">{this.props.person.email}</a>
                <h2>{this.props.person.jobOcupation}</h2>

                <div id="colors">
                    {
                        this.props.favoriteColors.map((favColor, i) => {
                            return <h4 key={i}>{favColor}</h4>
                        })
                    }
                </div>
            </div>
        )
    }
}

User.propTypes = {
    person: PropTypes.object,
    date: PropTypes.string,
    favoriteColors: PropTypes.array
}