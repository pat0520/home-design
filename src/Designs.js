import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Designs(props) {
    const h1Style = { color: "red", marginBotton: 20 };

    return (
        <>
            <h1 className="header" style={h1Style}>Designs</h1>
        </>
    )
}

export default Designs;