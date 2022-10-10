// import { useState } from "react";
// import data from "../ImageSlideShow/data";
import SimpleImageSlider from "react-simple-image-slider";
import "../ImageSlideShow/ImageSlideshow.css";

const images = [
  {
    url: "https://images.pexels.com/photos/306381/pexels-photo-306381.jpeg?cs=srgb&dl=pexels-salah-alawadhi-306381.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/833773/pexels-photo-833773.jpeg?cs=srgb&dl=pexels-andrew-jensen-833773.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/394545/pexels-photo-394545.jpeg?cs=srgb&dl=pexels-baurzhan-kadylzhanov-394545.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    url: "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ImageSlideshow = () => {
  return (
    <div className="slideshow-container">
      <SimpleImageSlider
        width={800}
        height={500}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        slideDuration={2}
        loop
      />
    </div>
  );
};

export default ImageSlideshow;
