import React from "react";

function Nav() {
    return(
        <>
            <nav className="primary-nav">
                <div><a href='/'>maya makes.</a></div>
                <ul className="nav-links">
                <li><a href="home.html" className="nav-link">about me</a></li>
                <li><a href="education.html" className="nav-link">what i make</a></li>
                <li><a href="experience.html" className="nav-link">reach me</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;