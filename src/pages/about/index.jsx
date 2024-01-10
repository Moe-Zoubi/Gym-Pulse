import AboutBanner from "../../components/AboutBanner";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";


const About = () => {

    return(
        <div className="about-section">
            <Navbar />
            <div className="page-header">
                <h2>About Us</h2>
            </div>
            <div className="about-flex">
                <div className="about-text"></div>
                <div className="about-img"></div>
            </div>
            <Footer />
        </div>
    )
}

export default About;
