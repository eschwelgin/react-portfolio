import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <h1>Eric Schwelgin</h1>
            <Link to="/react-portfolio/contact">Contact</Link>
            <Link to="/react-portfolio/portfolio">Portfolio</Link>
            <Link to="/react-portfolio/">Home</Link>
        </nav>
    )
}

export default Header