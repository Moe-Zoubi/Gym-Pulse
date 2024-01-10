import trainer1 from "../images/trainers/trainer1.png";
import trainer2 from "../images/trainers/trainer2.png";
import trainer3 from "../images/trainers/trainer3.png";
import facebook from "../images/social-media/facebook_icon.png";
import instagram from "../images/social-media/instagram_icon.png";
import twitter from "../images/social-media/twitter_icon.png";


function Trainers() {


    return(
        <div className="trainer-section">
            <h3>GYM TRAINERS</h3>
            <h2>Team Of Expert Coaches</h2>
            <p>Expert team of coaches helps you succeed in any goal, personalized guidance and motivation provided!</p>
            <div className="trainer-container">
                <div className="trainer">
                    <div className="trainer-img">
                        <img src={trainer1} alt="trainer" />
                    </div>
                    <div className="trainer-info">
                        <h2>James Carter</h2>
                        <p>Boxing Trainer</p>
                        <div className="trainers-socials">
                            <img src={facebook} alt="facebook icon" />
                            <img src={instagram} alt="instagram icon" />
                            <img src={twitter} alt="twitter icon" />
                        </div>
                        <div className="trainer-line"></div>
                    </div>
                </div>
                <div className="trainer">
                    <div className="trainer-img">
                        <img src={trainer2} alt="trainer" />
                    </div>
                    <div className="trainer-info">
                        <h2>Jone Smith</h2>
                        <p>Swimming Instructor</p>
                        <div className="trainers-socials">
                            <img src={facebook} alt="facebook icon" />
                            <img src={instagram} alt="instagram icon" />
                            <img src={twitter} alt="twitter icon" />
                        </div>
                        <div className="trainer-line"></div>
                    </div>
                </div>
                <div className="trainer">
                    <div className="trainer-img">
                        <img src={trainer3} alt="trainer" />
                    </div>
                    <div className="trainer-info">
                        <h2>Ellie Goldberg</h2>
                        <p>Yoga Isntructor</p>
                        <div className="trainers-socials">
                            <img src={facebook} alt="facebook icon" />
                            <img src={instagram} alt="instagram icon" />
                            <img src={twitter} alt="twitter icon" />
                        </div>
                        <div className="trainer-line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainers