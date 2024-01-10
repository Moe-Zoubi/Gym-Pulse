import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


function Pricing() {


    return(
        <div className="pricing-section">
            <h3 className="center-title-bg">PRICING PLANS</h3>
            <h2>Exclusive Pricing Plan</h2>
            <p>Gymat an unknown printer took a galley of type and scrambled make a type specimen book.</p>
            <div className="pricing-container">
                <div className="plan">
                    <div className="plan-img01">
                        <p className="plan-type">CORE</p>
                    </div>
                    <div className="price-info">
                        <h2>$39</h2>
                        <ul className="plan-services">
                            <li>Fitness Classes</li>
                            <li>Yoga</li>
                            <li>Gym</li>
                            <li>Swimming</li>
                        </ul>
                        <button>PURCHASE NOW <FontAwesomeIcon icon={faArrowRightLong} /></button>
                    </div>
                </div>
                <div className="plan">
                    <div className="plan-img02">
                        <p className="plan-type">SUPER</p>
                    </div>
                    <div className="price-info">
                        <h2>$59</h2>
                        <ul className="plan-services">
                            <li>Fitness Classes</li>
                            <li>Gym</li>
                            <li>Swimming</li>
                            <li>Sauna</li>
                            <li>Yoga</li>
                            <li>Personal Trainer</li>
                        </ul>
                        <button>PURCHASE NOW <FontAwesomeIcon icon={faArrowRightLong} /></button>
                    </div>
                </div>
                <div className="plan">
                    <div className="plan-img03">
                        <p className="plan-type">CATERED</p>
                    </div>
                    <div className="price-info">
                        <h2>$100</h2>
                        <ul className="plan-services">
                            <li>Fitness Classes</li>
                            <li>Gym</li>
                            <li>Swimming</li>
                            <li>Yoga</li>
                            <li>Climbing</li>
                            <li>Personal Trainer</li>
                            <li>Nutrition / Workout plans</li>
                        </ul>
                        <button>PURCHASE NOW <FontAwesomeIcon icon={faArrowRightLong} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Pricing;