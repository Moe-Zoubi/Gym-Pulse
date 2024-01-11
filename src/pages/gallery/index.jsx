import "./style.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import img01 from "../../images/gallery/img01.jpg";
import img02 from "../../images/gallery/img02.jpg";
import img03 from "../../images/gallery/img03.jpg";
import img04 from "../../images/gallery/img04.jpg";
import img05 from "../../images/gallery/img05.jpg";
import img06 from "../../images/gallery/img06.jpg";
import img07 from "../../images/gallery/img07.jpg";
import img08 from "../../images/gallery/img08.jpg";
import img09 from "../../images/gallery/img09.jpg";
import img10 from "../../images/gallery/img10.jpg";
import img11 from "../../images/gallery/img11.jpg";
import img12 from "../../images/gallery/img12.jpg";
import img13 from "../../images/gallery/img13.jpg";
import img14 from "../../images/gallery/img14.jpg";
import img15 from "../../images/gallery/img15.jpg";


const Gallery = () => {

    const imgArr = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15]

    return(
        <div className="gallery-section">
            <Navbar />
            <div className="page-header">
                <h2>Our Gallery</h2>
            </div>
            <div className="main-gallery">
                {imgArr.map(img => <img src={img} alt="item" />)}
            </div>
            <Footer />
        </div>
    )
}

export default Gallery;
