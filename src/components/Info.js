import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark, faLocation, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/homepage/gym-logo.png";
import SmallGallery from "./SmallGallery";


function Info({show, handleClose}){
    

    return(
        <div className={show ? "show-banner" : "hide-banner"}>
            <div className="flex-info">
                <div className="info-header">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div className="logo-name">
                            <p>Gym Pulse</p>
                            <p>Ultimate Gym</p>
                        </div>
                    </div>
                    <p className="close-info" onClick={handleClose} ><FontAwesomeIcon icon={faXmark}/></p>
                </div>
                <div className="about-info">
                    <h3>About Us</h3>
                    <p>
                        Find out who we are and what makes us unique. We are a community-driven
                        gym committed to providing personalized fitness experiences for all 
                        levels of fitness enthusiasts in a welcoming and supportive environment.
                    </p>
                </div>
                <SmallGallery />
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p><FontAwesomeIcon icon={faLocation} className="red" /> 32 Street, House Manhattan City</p>
                    <p><FontAwesomeIcon icon={faPhone} className="red" /> +123-4370006568</p>
                    <p><FontAwesomeIcon icon={faEnvelope} className="red" /> gympulse@gmail.com</p>
                </div>
                <div className="socials-info">
                    <h3>Follow Us</h3>
                    <i className="fa fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Info;