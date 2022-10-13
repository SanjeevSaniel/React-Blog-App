import ScrollToTop from "react-scroll-to-top";
import ImageGallery from "../ImageGallery/ImageGallery";
import ArticlesHorizontal from "../ArticlesHorizontal/ArticlesHorizontal";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import ImageSlideshow from "../ImageSlideShow/ImageSlideShow";
import LatestStories from "../LatestStories/LatestStories";

const articlesVertical = require("../API_Data/Articles.json");
const articlesHorizontal = require("../API_Data/ArticlesHorizontal.json");
const images = require("../API_Data/SliderImages.json");
const ads = require("../API_Data/HomeAds.json");

const Home = () => {
  return (
    <div className="Home">
      <ImageGallery />
      <ArticlesHorizontal articles={articlesHorizontal} />
      <ArticlesVertical
        articles={articlesVertical}
        ads={ads}
        articleLink="https://www.pexels.com/photo/woman-crossing-on-bridge-238631/"
        category="Travel"
        photo="https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?cs=srgb&dl=pexels-flo-maderebner-238631.jpg&fm=jpg"
        title="Tambon Nong Chaeng, Thailand"
        date="September 9 2022"
      />
      <ImageSlideshow images={images} />
      <LatestStories />
      <ScrollToTop
        className="scroll-arrow"
        color="#000000"
        smooth
      />
    </div>
  );
};

export default Home;
