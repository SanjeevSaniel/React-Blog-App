import React from "react";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import Photo from "../Images/Brahmastra.jpg";
// import Photo2 from "../Images/Kal-Ho-Naa-Ho-(2003).png";
// import "../css/Home.css";

const Bollywood = () => {
  return (
    <div className="Bollywood">
      <ArticlesVertical
        adLink="https://www.youtube.com/embed/hX0438nNKUc?autoplay=1&mute=1&controls=0&loop=1"
        adLink2="https://www.youtube.com/embed/EpLX09EwhcY/?autoplay=1&mute=1&controls=0&loop=1"
        adLink3="https://www.youtube.com/embed/V5jVntRVl-0/?autoplay=1&mute=1&controls=0&loop=1"
        articleLink="https://www.google.com/search?client=firefox-b-d&q=ra+one"
        articleLink2="https://www.google.com/search?client=firefox-b-d&q=kal+ho+na+ho"
        articleLink3="https://www.google.com/search?client=firefox-b-d&q=Brahmastra"
        adTitle="Allen Solly ad"
        adTitle2="Travel ad 2"
        adTitle3="Brahmastra Trailer"
        category="Bollywood"
        category2="Bollywood"
        description="Naina, an introverted, perpetually depressed girl's life changes when she meets Aman. But Aman has a secret of his own which changes their lives forever. Embroiled in all this is Rohit, Naina's best friend who conceals his love for her."
        description3="When the titular antagonist of an action game takes on physical form, it's only the game's less powerful protagonist who can save his creator's family."
        photo="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHXlDQAHJwrwObgcIY3ZXaowfbP1T8u1nNby6iGViOgaS2ysNy"
        photo2={Photo}
        photo3="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJJmDQCqXE6Rdsw2wjlEHwnFwyuGvd_klkkoJSBGhIAUpaqzuj"
        title="Kal Ho Naa Ho"
        title2="Brahmastra Part One: Shiva"
        title3="Ra.One"
        year="2003"
      />
      <ScrollToTop smooth />
    </div>
  );
};

export default Bollywood;
