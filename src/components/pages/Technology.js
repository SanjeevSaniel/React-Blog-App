import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

const ads = require("../API_Data/TechnologyAds.json");
const articles = require("../API_Data/TechnologyArticles.json");

const Technology = () => {
  return (
    <div className="Technology">
      <ArticlesVertical
        ads={ads}
        articles={articles}
        articleLink="https://www.techradar.com/news/microsoft-teams-users-are-using-it-to-send-confidential-business-data"
        category="Internet"
        photo="https://cdn.mos.cms.futurecdn.net/CGyp2r9sbsdSekNPWVh2ta-970-80.jpg.webp"
        title="Microsoft Teams users are using it"
        date="September 9 2022"
      />
      <ScrollToTop className="scroll-arrow" color="white" smooth />
    </div>
  );
};

export default Technology;
