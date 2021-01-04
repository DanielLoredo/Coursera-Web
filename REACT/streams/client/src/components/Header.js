import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import "../css/bootstrap.min.css";

const Header = () => {
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <Link to = "/" className = "navbar-brand">
                Streamy
            </Link>
            <div className = "collapse navbar-collapse" />
            <span className = "navbar-text">
                    <Link to = "/">
                        All Streams
                    </Link>
                    <GoogleAuth />
            </span>
        </nav>
    );
}

export default Header;
