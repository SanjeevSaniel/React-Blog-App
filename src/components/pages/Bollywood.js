import React from "react";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import Photo from "../Images/Brahmastra.jpg";

const articles = require("../API_Data/BollywoodArticles.json");
const bollyWoodAds = require("../API_Data/BollywoodAds.json");

const Bollywood = () => {
  return (
    <div className="Bollywood">
      <ArticlesVertical
        ads={bollyWoodAds}
        articles={articles}
        articleLink="https://www.google.com/search?client=firefox-b-d&q=Brahmastra"
        category="Bollywood"
        photo={Photo}
        title="Brahmastra Part One: Shiva"
        date="September 9 2022"
      />
      <ScrollToTop className="scroll-arrow" color="white" smooth />
    </div>
  );
};

export default Bollywood;
