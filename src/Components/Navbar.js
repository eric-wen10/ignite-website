import React, { useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);
    
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => {setExpandNavbar((prev) => !prev);
            }}
            > 
                <ReorderIcon /> 
            </button>
        </div>
        <div className="links">
            <Link to = "/home"> Home </Link>
            <Link to = "/projects"> Projects </Link>
            <Link to="/programs"> Programs </Link>
            <Link to="/ourteam"> Our Team </Link>
            // add the logo in here or something
            <Link to="/aboutus"> About Us</Link>
            <Link to="/contactus"> Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar
