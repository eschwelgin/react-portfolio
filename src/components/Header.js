import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <h1>Eric Schwelgin</h1>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Header