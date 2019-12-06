import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink target="_blank" to="/info">Info</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    )
}