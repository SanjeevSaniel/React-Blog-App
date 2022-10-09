import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

const Hollywood = () => {
  return (
    <div className="Hollywood">
      <ArticlesVertical
        adLink="https://www.youtube.com/embed/Zi4LMpSDccc?autoplay=1&mute=1&controls=0&loop=1"
        adLink2="https://www.youtube.com/embed/1XpxzOYSq80/?autoplay=1&mute=1&controls=0&loop=1"
        adLink3="https://www.youtube.com/embed/giXco2jaZ_4/?autoplay=1&mute=1&controls=0&loop=1"
        articleLink="https://www.google.com/search?client=firefox-b-d&q=top+gun+maverick"
        articleLink2="https://www.google.com/search?client=firefox-b-d&q=marvel+multiverse+doctor+strange"
        articleLink3="https://www.pexels.com/photo/hollywood-sign-2695679/"
        adTitle="Frozen 2"
        adTitle2="Encanto"
        adTitle3="Top Gun: Maverick"
        category="Hollywood"
        category2="Hollywood"
        description="Doctor Strange in the Multiverse of Madness is a 2022 superhero film, based on the Marvel Comics superhero of the same name."
        description3="After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it."
        photo="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg/220px-Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg"
        photo2="https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        photo3="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"
        title="Doctor Strange: In The Multiverse Of Madness"
        title2="Los Angeles, CA, Verenigde Staten"
        title3="Top Gun: Maverick"
        year="2022"
      />
      <ScrollToTop smooth />
    </div>
  );
};

export default Hollywood;
