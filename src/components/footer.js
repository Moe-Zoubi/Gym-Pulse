import logo from "../images/homepage/gym-logo.png";

function Footer() {


    return(
        <div className="footer">
            <div className="footer-item">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <div className="logo-name">
                        <p>Gym Pulse</p>
                        <p>Ultimate Gym</p>
                    </div>
                </div>
                <p className="footer-text">Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                <div className="footer-socials">
                    <i className="fa fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
            <div className="footer-item">
                <h3>Our Classes</h3>
                <div className="footer-line"></div>
                <ul>
                    <li>Fitness Classes</li>
                    <li>Swimming</li>
                    <li>Yoga</li>
                    <li>Climbing</li>
                    <li>Full-body Strength</li>
                </ul>
            </div>
            <div className="footer-item">
                <h3>Working Hours</h3>
                <div className="footer-line"></div>
                <ul className="footer-time">
                    <li>Monday - Friday:</li>
                    <li>7:00am - 23:00pm</li>
                    <li>Saturday:</li>
                    <li>7:00am - 20:00pm</li>
                    <li>Sunday - Closed</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer