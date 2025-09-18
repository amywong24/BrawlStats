import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-links">
                <div className="nav-left">
                    <li><Link to="/" id="header">BrawlStats</Link></li>
                    <li><Link to="/brawlers">Brawlers</Link></li>
                    <li><Link to="/leaderboard">LeaderBoard</Link></li>
                </div>
                <div className="nav-right">
                    <li><a href="https://supercell.com/en/games/brawlstars/" target="_blank" rel="noopener noreferrer" className="download-btn">Download BrawlStars!</a></li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;