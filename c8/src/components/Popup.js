import React from "react";

export const Popup = (props) => {
    return (
        <div className="popup">
            <button onClick={props.ClosePhoto} className="close-popup">&times;</button>
            <div className="popup-container">
                <img src={props.popupPhoto} alt="Popup Photo"/>
            </div>
        </div>
    )
}