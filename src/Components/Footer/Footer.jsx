import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <nav className="footer">
            <span>Footer</span>
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
export default Footer;