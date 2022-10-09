import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

const Technology = () => {
  return (
    <div className="Technology">
      <ArticlesVertical
        // photo2={Photo}
        adLink="https://www.youtube.com/embed/xfJxitgR4ZI?autoplay=1&mute=1&controls=0&loop=1"
        adLink2="https://www.youtube.com/embed/svF2HgAccKM/?autoplay=1&mute=1&controls=0&loop=1"
        adLink3="https://www.youtube.com/embed/tUP5S4YdEJo/?autoplay=1&mute=1&controls=0&loop=1"
        articleLink="https://www.techradar.com/news/we-could-be-waiting-a-while-for-the-samsung-galaxy-tab-s9"
        articleLink2="https://www.techradar.com/news/if-you-use-your-android-mobile-for-banking-in-india-this-warning-is-for-you"
        articleLink3="https://www.techradar.com/news/microsoft-teams-users-are-using-it-to-send-confidential-business-data"
        adTitle="Allen Solly ad"
        adTitle2="Travel ad 2"
        adTitle3="Siemens"
        category="Technology"
        category2="Internet"
        description="The Indian Computer Emergency Response Team (CERT-In), the country's cyber security agency, has a warning. In an advisory, CERT-In said a new mobile banking 'Trojan' virus, SOVA, which can stealthily encrypt an Android phone for ransom and is hard to uninstall is targeting Indian customers."
        description3="There was a gap of 18 months between the launch of the Samsung Galaxy Tab S7 and the Samsung Galaxy Tab S8, and if a new report is to be believed then it's going to be the same sort of wait for the Samsung Galaxy Tab S9."
        photo="https://cdn.mos.cms.futurecdn.net/TS9h5uboSFdqnqqWTsVYQW-970-80.jpg.webp"
        photo2="https://cdn.mos.cms.futurecdn.net/CGyp2r9sbsdSekNPWVh2ta-970-80.jpg.webp"
        photo3="https://cdn.mos.cms.futurecdn.net/BgJLCNCKsNxH6tsC9BvS7g-970-80.jpg.webp"
        title="If you use your Android mobile for banking in India..."
        title2="Microsoft Teams users are using it"
        title3="We could be waiting a while for the Samsung Galaxy Tab S9"
        year="2022"
      />
      <ScrollToTop smooth />
    </div>
  );
};

export default Technology;
