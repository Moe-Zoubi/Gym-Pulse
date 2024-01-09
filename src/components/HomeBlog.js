import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function HomeBlog() {

    const navigate = useNavigate();

    return(
        <div className="blog-banner">
            <h3>Latest Blog</h3>
            <h2>Our Recent News</h2>
            <p>Gymat an unknown printer took a galley of type and scrambled make a type specimen book.</p>
            <div className="recent-blogs">
                <div className="blog-item">
                    <p className="blog-date">04.01.2024</p>
                    <h4>Yoga For Everyone in 2023</h4>
                    <p className="blog-info">This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.</p>
                    <button onClick={() => navigate("/blog")}>READ MORE <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
                <div className="blog-item">
                    <p className="blog-date">26.12.2023</p>
                    <h4>Getting Back Into CrossFit After Vacation</h4>
                    <p className="blog-info">Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.</p>
                    <button onClick={() => navigate("/blog")}>READ MORE <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
                <div className="blog-item">
                    <p className="blog-date">24.11.2023</p>
                    <h4>Meet Fitness Ambassador Grace</h4>
                    <p className="blog-info">Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.</p>
                    <button onClick={() => navigate("/blog")}>READ MORE <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
            </div>
        </div>
    )
};

export default HomeBlog;