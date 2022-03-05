import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="header">
            <span>Header</span>
            <div>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/profile">Profile</Link>
                </span>
                <span>
                    <Link to="/login">Login</Link>
                </span>
                <span>
                    <Link to="/register">Register</Link>
                </span>
            </div>
        </nav>
    )
};
export default Header;