import ImageGallery from "../layouts/ImageGallery";
// import ImageListGrid from "../layouts/ImageListGrid";
import ArticlesHorizontal from "../layouts/ArticlesHorizontal";
import "../css/Home.css";

const Home = () => {
  // return <h1>Home</h1>;
  return (
    <div className="Home">
      <ImageGallery />
      <ArticlesHorizontal />
    </div>
  );
};

export default Home;
