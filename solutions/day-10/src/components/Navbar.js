import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


const Navbar = ()=>{
    return (
        <nav>
            <h2 className="logo">Logo</h2>
            <div className="navbar">
                <ul className="navList">
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    {/* <li><Link to="/projects">Projects</Link></li> */}
                    <li><Link to="/contact">Connect</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;