import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import equipement from "../images/about-us/equpments.png";
import girl from "../images/about-us/girl-run.png";
import text from "../images/about-us/girl-side-text.png";
import gym from "../images/about-us/gym.png";
import weightLifter from "../images/about-us/weightlifter.png";
import redCircle from "../images/about-us/girl-redbg.svg";

function AboutBanner() {


    return(
        <div className="about-container">
            <div className="about-us">
                <h3>WHO WE ARE</h3>
                <h2>Take Your Health And Body To Next Level</h2>
                <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                <div className="icons-container">
                    <div>
                        <img src={weightLifter} alt="trainer" />
                        <p>PROFESSIONAL TRAINERS</p>
                    </div>
                    <div>
                        <img src={equipement} alt="gym equipement" />
                        <p>MODERN EQUIPMENTS</p>
                    </div>
                    <div>
                        <img src={gym} alt="gym machines" />
                        <p>FANCY GYM MACHINES</p>
                    </div>
                </div>
                <button>TAKE A TOUR <FontAwesomeIcon icon={faArrowRightLong} /></button>
            </div>
            <div className="girl-running">
                <img src={redCircle} alt="red circle" />
                <img src={text} alt="text running" />
                <img src={girl} alt="girl running" />
            </div>
        </div>
    )
}

export default AboutBanner;