import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark, faLocation, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/homepage/gym-logo.png";


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
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p><FontAwesomeIcon icon={faLocation} /> 32 Street, House Manhattan City</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +123-4370006568</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> gympulse@gmail.com</p>
                </div>
                <div className="socials-info">
                    <FontAwesomeIcon icon={faLocation} />
                    <FontAwesomeIcon icon={faLocation}/>
                    <FontAwesomeIcon icon={faLocation}/>
                </div>
            </div>
        </div>
    )
}

export default Info;