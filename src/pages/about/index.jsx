import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import redCircle from "../../images/about-us/girl-redbg.svg";
import girl from "../../images/about-us/girl-run.png";
import text from "../../images/about-us/girl-side-text.png";
import mountain from "../../images/about-us/mountain.png";
import target from "../../images/about-us/target.png";
import history01 from "../../images/about-us/about-img01.jpg";
import history02 from "../../images/about-us/about-img02.jpg";

const About = () => {

    return(
        <div className="about-section">
            <Navbar />
            <div className="page-header">
                <h2>About Us</h2>
            </div>
            <div className="about-content">
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
                <div className="about-history">
                    <div className="history-text">
                        <img src={mountain} alt="target" />
                        <h2>Our History</h2>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit ali
                            qua dolor do amet sint. Velit officia consequat duis 
                            enim velit mollit Exercitation veniam consequat.
                        </p>
                    </div>
                    <div className="about-img01"></div>
                    <div className="about-img02"></div>
                    <div className="history-text">
                        <img src={target} alt="target" />
                        <h2>Our History</h2>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit ali
                            qua dolor do amet sint. Velit officia consequat duis 
                            enim velit mollit Exercitation veniam consequat.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;
