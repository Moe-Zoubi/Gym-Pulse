import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import "./style.css";
import classData from "../../data/ClassData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightLong, faClock, faUser } from "@fortawesome/free-solid-svg-icons";


const Classes = () => {

    return(
        <div className="classes-section">
            <Navbar />
            <div className="page-header">
                <h2>Classes</h2>
            </div>
            <div className="classes-container">
                {classData.map((item) =>
                    (
                        <div 
                            className="class-item" 
                            style={{ background: `linear-gradient(rgba(107, 107, 107, 0.5), rgba(0, 0, 0, 0.7)), url('${item.img}') center/cover no-repeat` }}
                            key={item.classname}
                        >
                            <div className="class-text">
                                <h2>{item.classname}</h2>
                                <div className="class-line"></div>
                                <div className="class-details">
                                    <p><FontAwesomeIcon icon={faUser}/> {item.trainer}</p>
                                    <p><FontAwesomeIcon icon={faClock}/> {item.date}</p>
                                </div>
                                <button>JOIN NOW <FontAwesomeIcon icon={faArrowRightLong} /></button>
                            </div>
                        </div>
                    )
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Classes;
