import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import "./style.css";
import blogsData from "../../data/BlogData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngleRight, faLayerGroup, faLongArrowRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Blog = () => {


    return(
        <div className="blog-section">
            <Navbar />
            <div className="page-header">
                <h2>Blog</h2>
            </div>
            <div className="blog-container">
                <div className="blogs">
                    {blogsData.map(item => (
                        <div className="blog-comment">
                            <img src={item.img} alt="person" />
                            <p><FontAwesomeIcon icon={faLayerGroup} style={{color: "FE0000"}}/> By <span className="bold">Admin</span> | March 11, 2023 | Yoga</p>
                            <h2>{item.title}</h2>
                            <p>
                                Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually
                                transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched
                                innovation rather than backend supply. when an unknown printer took a galley.
                            </p>
                            <button>PURCHASE NOW <FontAwesomeIcon icon={faLongArrowRight} /></button>
                        </div>
                    ))}
                </div>
                <div className="side-blog">
                    <form className="search-bar">
                        <input type="text" placeholder="Search..." />
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                    <div className="blog-categories">
                        <h3>Categories</h3>
                        <div className="class-line"></div>
                        <ul>
                            <li>
                                <p><FontAwesomeIcon icon={faAngleRight} /> Body Building</p>
                                <p>(4)</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faAngleRight} /> Boxing</p>
                                <p>(4)</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faAngleRight} /> Crossfit</p>
                                <p>(4)</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faAngleRight} /> Fitness</p>
                                <p>(4)</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faAngleRight} /> Meditation</p>
                                <p>(4)</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faAngleRight} /> Yoga</p>
                                <p>(4)</p>
                            </li>
                        </ul>
                    </div>
                    <div className="latest-blogs">
                        <h3>Recent Posts</h3>
                        <div className="class-line"></div>
                        {
                            blogsData.map(item =>(
                                <div className="latest-blog">
                                    <img src={item.img} alt="person" />
                                    <div className="latest-text">
                                        <p>March 22, 2023</p>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog;
