import "../css/ImageGallery.css";

const ImageGallery = () => {
  return (
    <div className="grid-image-container">
      <div className="grid-images grid-images-one">
        <div className="grid-images-caption-one">
          <h2>Lake Louise, AB, Canada</h2>
          <h5>Travel / October 1 2022</h5>
        </div>
      </div>
      <div className="grid-images grid-images-two">
        <div className="grid-images-caption-two">
          <h2>Barra de Camaratuba, PB, Brazil</h2>
          <h5>Travel / October 2 2022</h5>
        </div>
      </div>
      <div className="grid-images grid-images-three">
        <div className="grid-images-caption-three">
          <h2>Boating</h2>
          <h5>Travel / October 1 2022</h5>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
