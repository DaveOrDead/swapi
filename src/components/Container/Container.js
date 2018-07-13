// Vendor
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Assets
import "./Container.css";

const Container = ({ children, isCentered }) => {
    const classes = classNames({
        "l-container": true,
        "l-container--centered": isCentered
    });
    return <div className={classes}>{children}</div>;
};

Container.propTypes = {
    /**
     * Child elements.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    /**
     * Determines if container is centered.
     */
    isCentered: PropTypes.bool
};

export default Container;
