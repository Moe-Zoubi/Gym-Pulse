import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import redCircle from "../../images/about-us/girl-redbg.svg";
import girl from "../../images/about-us/girl-run.png";
import text from "../../images/about-us/girl-side-text.png";

const About = () => {

    return(
        <div className="about-section">
            <Navbar />
            <div className="page-header">
                <h2>About Us</h2>
            </div>
            <div className="about-flex">
                <div className="about-text">
                    <h3 className="left-title-bg">WHO WE ARE</h3>
                    <h2>We Will Give You Strength and Health</h2>
                    <p>
                        At Gymate, we are dedicated to helping you achieve the body of your dreams.
                        Our expert trainers and nutritionists will work with you to create a personalized
                        fitness and nutrition plan that helps you reach your specific goals.
                    </p>
                    <button>CONTACT US <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
                <div className="girl-running">
                    <img src={redCircle} alt="red circle" />
                    <img src={text} alt="text running" />
                    <img src={girl} alt="girl running" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;
