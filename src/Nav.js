import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
    color: "#614476",
    fontWeight: "bold"
}

function Nav() {
    return (
        <nav>
            <NavLink activeStyle={activeStyle} to="/">Home</NavLink>{" "}|{" "}
            <NavLink activeStyle={activeStyle} to="/designs">Designs</NavLink>
        </nav>
    )
}

export default Nav;