import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

const ads = require("../API_Data/FoodAds.json");
const articles = require("../API_Data/FoodArticles.json");

const Food = () => {
  return (
    <div className="Food">
      <ArticlesVertical
        ads={ads}
        articles={articles}
        articleLink="https://www.inspiredtaste.net/24412/cocoa-brownies-recipe/"
        category="Food"
        photo="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Choco Brownies"
        date="October 5 2022"
      />
      <ScrollToTop className="scroll-arrow" color="white" smooth />
    </div>
  );
};

export default Food;
