import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faChartBar, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/homepage/gym-logo.png";
import plusbtn from "../images/signUp/plus-icon.png";
import Info from "./Info";

function Navbar(){

    const navigate = useNavigate();
    const [chartIcon, setChartIcon] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    function togglechart(){
        setChartIcon(!chartIcon);
    }

    function toggleLink(){
        setShowLinks(!showLinks);
    }

    return(
        <div className="navbar">
            <div className="logo" onClick={() => navigate("/home")}>
                <img src={logo} alt="logo" />
                <div className="logo-name">
                    <p>Gym Pulse</p>
                    <p>Ultimate Gym</p>
                </div>
            </div>
            <div className="links-container">
                <ul className="links">
                    <li onClick={() => navigate("/home")}>Home</li>
                    <li onClick={() => navigate("/about")}>About</li>
                    <li onClick={() => navigate("/schedule")}>Schedule</li>
                    <li onClick={() => navigate("/classes")}>Classes</li>
                    <li onClick={() => navigate("/blog")}>Blog</li>
                    <li onClick={() => navigate("/reviews")}>Reviews</li>
                    <li onClick={() => navigate("/pricing")}>Pricing</li>
                    <li onClick={() => navigate("/contact")}>Contact</li>
                </ul>
            </div>
            <div className="sign-in">
                <p className="toggle-links" onClick={() => toggleLink()}><FontAwesomeIcon icon={faBars } size="2xl" /></p>
                <div className={showLinks ? "show-mobile-nav" : "hide-mobile-nav"}>
                    <p className="close-nav" onClick={() => toggleLink()} ><FontAwesomeIcon icon={faXmark}/></p>
                    <ul className="mobile-links">
                        <li onClick={() => navigate("/home")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/schedule")}>Schedule</li>
                        <li onClick={() => navigate("/classes")}>Classes</li>
                        <li onClick={() => navigate("/blog")}>Blog</li>
                        <li onClick={() => navigate("/reviews")}>Reviews</li>
                        <li onClick={() => navigate("/pricing")}>Pricing</li>
                        <li onClick={() => navigate("/contact")}>Contact</li>
                    </ul>
                </div>
                <FontAwesomeIcon className="user-icon" icon={faUser} onClick={() => navigate("/login")}/>
                <FontAwesomeIcon className="chart-icon" icon={faChartBar} onClick={() => togglechart()}/>
                <div className="sign-up" onClick={() => navigate("/contact")}>
                    <img src={plusbtn} alt="login"  />
                    <p>Join Class Now</p>
                </div>
            </div>
            <Info show={chartIcon} handleClose={() => setChartIcon(false)}/>
        </div>
    );
}

export default Navbar;