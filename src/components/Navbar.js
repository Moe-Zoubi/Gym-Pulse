import logo from "../images/homepage/gym-logo.png";
import chart from "../images/signUp/chart.png";
import profile from "../images/signUp/profile-logo.png";
import plusbtn from "../images/signUp/plus-icon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar(){

    const navigate = useNavigate();
    const [chartIcon, setChartIcon] = useState(false);

    function togglechart(){
        setChartIcon(!chartIcon);
    }

    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <div className="logo-name">
                    <p>Gym Pulse</p>
                    <p>Ultimate Gym</p>
                </div>
            </div>
            <div>
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
                <img src={profile} alt="login" onClick={() => navigate("/login")}/>
                <img src={chart} alt="chart" onClick={() => togglechart()} />
                <div className="sign-up" onClick={() => navigate("/contact")}>
                    <img src={plusbtn} alt="login"  />
                    <p>Join Class Now</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;