import "./style.css";
import Navbar from "../../components/Navbar";
import AboutBanner from "../../components/AboutBanner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import clock from "../../images/homepage/clock.png";
import nutrition from "../../images/homepage/nutrition.png";
import dumbbell from "../../images/homepage/dumbbell.png";


const HomePage = () => {

    return(
        <div className="home-section">
            <Navbar />
            <div className="hero-intro">
                <div className="hero-text">
                    <h2>FIND YOUR ENERGY</h2>
                    <h1>MAKE YOUR BODY <span className="hollow-text">FIT & PERFECT</span></h1>
                    <button>OUR CLASSES <span className="red"> <FontAwesomeIcon icon={faArrowRightLong} /></span></button>
                </div>
                <div className="hero-socials">
                    <p>SHARE</p>
                    <span className="red-line"></span>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
            <div className="about-banner">
                <div className="about-services">
                    <div className="progression">
                        <img src={clock} alt="clock" />
                        <h3>Progression</h3>
                        <p>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p>
                    </div>
                    <div className="workout">
                        <img src={dumbbell} alt="clock" />
                        <h3>WORKOUT</h3>
                        <p>With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.</p>
                    </div>
                    <div className="nutrition">
                        <img src={nutrition} alt="clock" />
                        <h3>NUTRITIONS</h3>
                        <p>Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</p>
                    </div>
                </div>
                <AboutBanner />
            </div>
        </div>
    )
}

export default HomePage;
