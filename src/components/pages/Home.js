import ImageGallery from "../layouts/ImageGallery";
// import ImageListGrid from "../layouts/ImageListGrid";
import ArticlesHorizontal from "../layouts/ArticlesHorizontal";
import ArticlesVertical from "../layouts/ArticlesVertical";
import Advertisement from "../layouts/Advertisement";
import "../css/Home.css";

const Home = () => {
  // return <h1>Home</h1>;
  return (
    <div className="Home">
      <ImageGallery />
      <ArticlesHorizontal />
      <ArticlesVertical />
      <Advertisement />
    </div>
  );
};

export default Home;
