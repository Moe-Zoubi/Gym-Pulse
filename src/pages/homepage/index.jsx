import "./style.css";
import Navbar from "../../components/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


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
        </div>
    )
}

export default HomePage;
