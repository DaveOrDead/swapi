// Vendor
import React from "react";
// Assets
import "./Header.css";
import logo from "./star-wars-logo.png";

const Header = () => (
    <header className="c-header">
        <h1 className="h-hide-visually">Star Wars</h1>
        <img src={logo} height="38" width="366" alt="Star Wars logo" />
    </header>
);

export default Header;
