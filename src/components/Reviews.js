import main from "../images/reviews/main.jpg";


function Reviews() {


    return(
        <div className="review-section">
            <h3>Reviews</h3>
            <div className="gray-bg">
                <div className="white-bg">
                    <div className="review-container">
                        <img src={main} alt="girl" />
                        <div className="review-text">
                            <p>
                            “I've been a member of Gymate for the past 6 months and it has been an amazing experience.
                            The trainers are knowledgeable and supportive, the equipment is top-notch, and the community
                            of members is friendly and encouraging.”
                            </p>
                            <div className="reviewer-name">
                                <h4>Celina Smith</h4>
                                <p>Movie Actress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;