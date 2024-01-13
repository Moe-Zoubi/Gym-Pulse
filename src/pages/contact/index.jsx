import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import "./style.css";


const Contact = () => {

    return(
        <div className="contact-section">
            <Navbar />
            <div className="page-header">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-container">
                <div className="contact-text">
                    <h2>We are here for help you! To Shape Your Body.</h2>
                    <p>
                        At Gymate, we are dedicated to helping you achieve the body of your dreams.
                        Our expert trainers and nutritionists will work with you to create a personalized
                        fitness and nutrition plan that helps you reach your specific goals.
                    </p>
                    <div className="contact-grid">
                        <div>
                            <h4>New York City, USA</h4>
                            <div className="contact-line"></div>
                            <p>85 Briston Mint Street,</p>
                            <p>London, E1 8LG, USA</p>
                        </div>
                        <div>
                            <h4>Opening Hours</h4>
                            <div className="contact-line"></div>
                            <p>Mon to Fri: 7:00 am — 23:00 pm</p>
                            <p>Sat: 7:00 am — 20:00 pm</p>
                        </div>
                        <div>
                            <h4>Information</h4>
                            <div className="contact-line"></div>
                            <p>+800-123-4567</p>
                            <p>gymat@gymail.com</p>
                        </div>
                        <div>
                            <h4>Follow Us On</h4>
                            <div className="contact-line"></div>
                            <div className="contact-socials">
                                <i className="fa fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Leave Us Your Info</h2>
                    <div className="contact-line"></div>
                    <form>
                        <input type="email" placeholder="Emaill Address Here" />
                        <input type="text" placeholder="Full Name Here" />
                        <select>
                            <option>Body Building</option>
                            <option>Cycling</option>
                            <option>Karate</option>
                            <option>Fitness</option>
                            <option>Yoga</option>
                            <option>Meditation</option>
                            <option>Boxing</option>
                            <option>Running</option>
                            <option>Workout</option>
                        </select>
                        <textarea>Comment</textarea>
                        <button>SUBMIT NOW</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
