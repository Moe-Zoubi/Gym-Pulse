import logo from "../images/homepage/gym-logo.png";
import chart from "../images/signUp/chart.png";
import profile from "../images/signUp/profile-logo.png";
import plusbtn from "../images/signUp/plus-icon.png";

function Navbar(){

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Schedule</li>
                    <li>Classes</li>
                    <li>Blog</li>
                    <li>Reviews</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="sign-in">
                <img src={profile} alt="login" />
                <img src={chart} alt="chart" />
                <div className="sign-up">
                    <img src={plusbtn} alt="login" />
                    <p>Join Class Now</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;