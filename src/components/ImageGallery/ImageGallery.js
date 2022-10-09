import { Link } from "react-router-dom";
import "../ImageGallery/ImageGallery.css";

const ImageGallery = () => {
  return (
    <div className="grid-image-container">
      <Link to="/Information1" className="image-link grid-images-one">
        <div className="grid-images ">
          <div className="grid-images-caption-one">
            <h2>Lake Louise, AB, Canada</h2>
            <h5>Travel / October 1 2022</h5>
          </div>
        </div>
      </Link>

      <Link
        to="/Information2"
        // href="https://www.pexels.com/photo/men-in-red-and-green-sailboat-2258349/"
        className="grid-images-two"
        // target="_blank"
        // rel="noreferrer"
      >
        <div className="grid-images ">
          <div className="grid-images-caption-two">
            <h2>Barra de Camaratuba, PB, Brazil</h2>
            <h5>Travel / October 2 2022</h5>
          </div>
        </div>
      </Link>

      {/* <a
        href="https://www.pexels.com/photo/men-in-red-and-green-sailboat-2258349/"
        className="grid-images-two"
        target="_blank"
        rel="noreferrer"
      >
        <div className="grid-images ">
          <div className="grid-images-caption-two">
            <h2>Barra de Camaratuba, PB, Brazil</h2>
            <h5>Travel / October 2 2022</h5>
          </div>
        </div>
      </a> */}

      <Link
        to="/Information3"
        // href="https://www.pexels.com/photo/adventure-boating-boats-clouds-301738/"
        className="grid-images-three"
        // target="_blank"
        // rel="noreferrer"
      >
        <div className="grid-images ">
          <div className="grid-images-caption-three">
            <h2>Boating</h2>
            <h5>Travel / October 1 2022</h5>
          </div>
        </div>
      </Link>
      {/* <a
        href="https://www.pexels.com/photo/adventure-boating-boats-clouds-301738/"
        className="grid-images-three"
        target="_blank"
        rel="noreferrer"
      >
        <div className="grid-images ">
          <div className="grid-images-caption-three">
            <h2>Boating</h2>
            <h5>Travel / October 1 2022</h5>
          </div>
        </div>
      </a> */}
    </div>
  );
};

export default ImageGallery;
