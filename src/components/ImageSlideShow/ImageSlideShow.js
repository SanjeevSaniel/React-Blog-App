import SimpleImageSlider from "react-simple-image-slider";
import "../ImageSlideShow/ImageSlideshow.css";

const ImageSlideshow = ({ images }) => {
  return (
    <div className="slideshow-container">
      <SimpleImageSlider
        width={750}
        height={450}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={2}
        loop
      />
    </div>
  );
};

export default ImageSlideshow;
