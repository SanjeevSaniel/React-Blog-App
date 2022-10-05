import ImageGallery from "../ImageGallery/ImageGallery";
// import ImageListGrid from "../layouts/ImageListGrid";
import ArticlesHorizontal from "../ArticlesHorizontal/ArticlesHorizontal";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import ImageSlideshow from "../ImageSlideShow/ImageSlideShow";
import "../css/Home.css";

const Home = () => {
  // return <h1>Home</h1>;
  return (
    <div className="Home">
      <ImageGallery />
      <ArticlesHorizontal />
      <ArticlesVertical />
      <ImageSlideshow />
    </div>
  );
};

export default Home;
