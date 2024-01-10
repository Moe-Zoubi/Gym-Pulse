import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import main from "../images/choose-us/main-img.png";
import bench from "../images/choose-us/bench-press.png";
import pose from "../images/choose-us/training.png";
import boxing from "../images/choose-us/boxing.png";
import swimming from "../images/choose-us/swimming.png";


function ChooseUs(){

    return(
        <div className="choose-us">
            <div className="service-banner">
                <h2>We Are Always Providing Best Fitness Service For You</h2>
                <button>Join Us Now <span className="red"><FontAwesomeIcon icon={faArrowRightLong} /></span></button>
            </div>
            <div className="choose-container">
                <img src={main} alt="person" />
                <div className="choose-text">
                    <h3 className="center-title-bg">WHY CHOOSE US</h3>
                    <h2>We Can Give Shape To Your Body Here!</h2>
                    <p>
                        At Gymate, we are dedicated to helping you achieve the body of your dreams.
                        Our expert trainers and nutritionists will work with you to create a personalized
                        fitness and nutrition plan that helps you reach your specific goals.
                    </p>
                    <div className="choose-items">
                        <div className="item">
                            <img src={bench} alt="bench-press equipement" />
                            <p>Modern Gym Equipments</p>
                        </div>
                        <div className="item">
                            <img src={pose} alt="person posing" />
                            <p>Free Fitness Training</p>
                        </div>
                        <div className="item">
                            <img src={swimming} alt="person swimming" />
                            <p>Indoor And Out Door Pools</p>
                        </div>
                        <div className="item">
                            <img src={boxing} alt="boxing gloves" />
                            <p>Latest Boxing Equipments</p>
                        </div>
                    </div>
                    <button>OUR CLASSES <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
            </div>
        </div>
    );
}


export default ChooseUs;