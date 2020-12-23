import React from "react";
import "../css/bootstrap.min.css";
import Link from "./Link";

const Header = () => {
    return (
        <nav className = "navbar navbar-light" style = {{borderBottom: "1px solid black", marginBottom: "10px"}}>
            <Link className = "navbar-brand" href = "/">Accordion</Link>
            <Link className = "navbar-brand" href = "/list">Search</Link>
            <Link className = "navbar-brand" href = "/dropdown">Dropdown</Link>
            <Link className = "navbar-brand" href = "/translate">Translate</Link>
        </nav>
    );
}

export default Header;
