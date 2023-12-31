import img01 from "../images/gallery/img01.jpg";
import img02 from "../images/gallery/img02.jpg";
import img03 from "../images/gallery/img03.jpg";
import img04 from "../images/gallery/img04.jpg";
import img05 from "../images/gallery/img05.jpg";
import img06 from "../images/gallery/img06.jpg";


function SmallGallery() {
    

    return(
        <div className="gallery-info">
            <h3>Gallery</h3>
            <div className="gallery-grid">
                <img src={img01} alt="weights" />
                <img src={img02} alt="tire" />
                <img src={img03} alt="resting-area" />
                <img src={img04} alt="deadlift" />
                <img src={img05} alt="yoga" />
                <img src={img06} alt="gym" />
            </div>
        </div>
    )
}

export default SmallGallery;