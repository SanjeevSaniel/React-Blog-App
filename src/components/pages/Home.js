import ScrollToTop from "react-scroll-to-top";
import ImageGallery from "../ImageGallery/ImageGallery";
import ArticlesHorizontal from "../ArticlesHorizontal/ArticlesHorizontal";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import ImageSlideshow from "../ImageSlideShow/ImageSlideShow";
import LatestStories from "../LatestStories/LatestStories";
// import "../css/Home.css";

const Home = () => {
  // return <h1>Home</h1>;
  return (
    <div className="Home">
      <ImageGallery />
      <ArticlesHorizontal />
      <ArticlesVertical
        adLink="https://www.youtube.com/embed/5s8fs_j2xlY/?autoplay=1&mute=1&controls=0&loop=1"
        adLink2="https://www.youtube.com/embed/EpLX09EwhcY/?autoplay=1&mute=1&controls=0&loop=1"
        adLink3="https://www.youtube.com/embed/mLEd_s3arh4/?autoplay=1&mute=1&controls=0&loop=1"
        articleLink="https://www.pexels.com/photo/woman-crossing-on-bridge-238631/"
        articleLink2="https://www.pexels.com/photo/woman-crossing-on-bridge-238631/"
        articleLink3="https://www.pexels.com/photo/woman-crossing-on-bridge-238631/"
        adTitle="Travel ad"
        adTitle2="Travel ad 2"
        adTitle3="Travel ad 2"
        category="Travel"
        category2="Travel"
        description="Nong Chaeng is a city in Phetchabun, Thailand. It has many popular attractions, including Mae Hong Son Mountain Wat, making it well worth a visit."
        description2="Nong Chaeng is a city in Phetchabun, Thailand. It has many popular attractions, including Mae Hong Son Mountain Wat, making it well worth a visit."
        description3="Nong Chaeng is a city in Phetchabun, Thailand. It has many popular attractions, including Mae Hong Son Mountain Wat, making it well worth a visit."
        photo="https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?cs=srgb&dl=pexels-flo-maderebner-238631.jpg&fm=jpg"
        photo2="https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?cs=srgb&dl=pexels-flo-maderebner-238631.jpg&fm=jpg"
        photo3="https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?cs=srgb&dl=pexels-flo-maderebner-238631.jpg&fm=jpg"
        title="Tambon Nong Chaeng, Thailand"
        title2="Tambon Nong Chaeng, Thailand"
        title3="Tambon Nong Chaeng, Thailand"
        year="2022"
      />
      <ImageSlideshow />
      <LatestStories />
      <ScrollToTop smooth />
    </div>
  );
};

export default Home;
