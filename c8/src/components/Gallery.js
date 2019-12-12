import React from "react";
import { Popup } from "./Popup";

export const Gallery = (props) => {
    return (
        <div id="gallery">
            {props.photoslist
            .slice(0, 50)
            .map(photo => {
                return (
                    <div onClick={() => props.OpenPhoto(photo.url)} key={photo.id} className="image-holder">
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                )
            })}

            {props.popupPhoto !== "" ? <Popup ClosePhoto={props.ClosePhoto} popupPhoto={props.popupPhoto} /> : null}
        </div>
    )
}