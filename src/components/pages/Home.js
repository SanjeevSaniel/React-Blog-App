import ScrollToTop from "react-scroll-to-top";
import ImageGallery from "../ImageGallery/ImageGallery";
import ArticlesHorizontal from "../ArticlesHorizontal/ArticlesHorizontal";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import ImageSlideshow from "../ImageSlideShow/ImageSlideShow";
import LatestStories from "../LatestStories/LatestStories";
import "../css/Home.css";

const Home = () => {
  // return <h1>Home</h1>;
  return (
    <div className="Home">
      <ImageGallery />
      <ArticlesHorizontal />
      <ArticlesVertical />
      <ImageSlideshow />
      <LatestStories />
      <ScrollToTop smooth/>
    </div>
  );
};

export default Home;
