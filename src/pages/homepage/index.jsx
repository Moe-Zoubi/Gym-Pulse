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
            <div className="featured-classes">
                <div className="section-heading">
                    <h3>OUR FEATURED CLASSES</h3>
                    <h2>We Are Offering Best Flexible Classes</h2>
                </div>
                <div className="classes-grid">
                    <div className="parent col-2">
                        <div className="class one"></div>
                        <div className="grid-item">
                            <h3>CrossFit</h3>
                            <p>Wednesday: 9:00am-10:00am</p>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="class two"></div>
                        <div className="grid-item">
                            <h3>Karate</h3>
                            <p>Friday: 10:00am-11:00am</p>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="class three"></div>
                        <div className="grid-item">
                            <h3>Martial Arts</h3>
                            <p>Saturday: 9:00am-10:00am</p>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="class four"></div>
                        <div className="grid-item">
                            <h3>Power</h3>
                            <p>Friday: 1:00pm-2:00pm</p>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="class five"></div>
                        <div className="grid-item">
                            <h3>Yoga</h3>
                            <p>Sunday: 6:00pm-7:00pm</p>
                        </div>
                    </div>
                    <div className="parent col-2">
                        <div className="class six"></div>
                        <div className="grid-item col-2">
                            <h3>Workout</h3>
                            <p>Monday: 4:00pm-5:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
