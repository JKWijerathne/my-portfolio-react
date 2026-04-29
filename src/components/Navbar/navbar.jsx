import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll'; // Optional: for smooth scrolling

const SunIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

const MoonIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

const Navbar = ({ isLightMode, toggleTheme }) => {
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

            <div className="rightMenu">
                <div className="themeToggle" onClick={toggleTheme} title="Toggle Theme">
                    {isLightMode ? <MoonIcon /> : <SunIcon />}
                </div>

                {/* Mobile Menu Toggle Icon */}
                <div className="mobMenuIcon" onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? '✕' : '☰'}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link className="listItem" to="home" onClick={() => setShowMenu(false)}>Home</Link>
                <Link className="listItem" to="skills" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link className="listItem" to="projects" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link className="listItem" to="blogs" onClick={() => setShowMenu(false)}>Blogs</Link>
                <Link className="listItem" to="education" onClick={() => setShowMenu(false)}>Education</Link>
                <Link className="listItem" to="contact" onClick={() => setShowMenu(false)}>Contact</Link>
                <div className="listItem themeToggleMobile" onClick={() => { toggleTheme(); setShowMenu(false); }}>
                    {isLightMode ? 'Dark Mode' : 'Light Mode'}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;