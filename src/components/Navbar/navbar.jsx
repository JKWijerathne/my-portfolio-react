import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll'; // Optional: for smooth scrolling

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <span className="logo">Janani Wijerathne</span>
            
            {/* Desktop Menu */}
            <div className="desktopMenu">
                <Link className="desktopMenuListItem" to="home" smooth={true} duration={500}>Home</Link>
                <Link className="desktopMenuListItem" to="skills" smooth={true} duration={500}>Skills</Link>
                <Link className="desktopMenuListItem" to="projects" smooth={true} duration={500}>Projects</Link>
                <Link className="desktopMenuListItem" to="blogs" smooth={true} duration={500}>Blogs</Link>
                <Link className="desktopMenuListItem" to="education" smooth={true} duration={500}>Education</Link>
                <Link className="desktopMenuListItem" to="contact" smooth={true} duration={500}>Contact</Link>
            </div>

        

            {/* Mobile Menu Toggle Icon */}
            <div className="mobMenuIcon" onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? '✕' : '☰'}
            </div>

            {/* Mobile Menu */}
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link className="listItem" to="home" onClick={() => setShowMenu(false)}>Home</Link>
                <Link className="listItem" to="skills" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link className="listItem" to="projects" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link className="listItem" to="blogs" onClick={() => setShowMenu(false)}>Blogs</Link>
                <Link className="listItem" to="education" onClick={() => setShowMenu(false)}>Education</Link>
                <Link className="listItem" to="contact" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;