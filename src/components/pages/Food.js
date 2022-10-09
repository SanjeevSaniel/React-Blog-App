import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

const Food = () => {
  return (
    <div className="Food">
      <ArticlesVertical
        // photo2={Photo}
        adLink="https://www.youtube.com/embed/7SJh6vNR7jI?autoplay=1&mute=1&controls=0&loop=1"
        adLink2="https://www.youtube.com/embed/PZ4pctQMdg4/?autoplay=1&mute=1&controls=0&loop=1"
        adLink3="https://www.youtube.com/embed/H1trBoxr0Jo/?autoplay=1&mute=1&controls=0&loop=1"
        articleLink="https://www.delish.com/cooking/recipe-ideas/a40170306/spicy-crab-roll-recipe/"
        articleLink2="https://tasty.co/recipe/spicy-chicken-pizza"
        articleLink3="https://www.inspiredtaste.net/24412/cocoa-brownies-recipe/"
        adTitle="Biryani"
        adTitle2="Food"
        adTitle3="Shan Foods"
        category="Food"
        category2="Food"
        description="Making homemade pizza dough can sound like a lot of work, but it’s so worth the bragging rights. The dough itself requires few ingredients and just a little bit of rising and rest time."
        description3="Spicy Crab Roll is a popular Japanese sushi roll – creamy, satisfying, and fiery spicy. The kani crab stick is shredded and then seasoned with sriracha spicy mayo, then wrapped in nori seaweed sheets and seasoned rice."
        photo="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        photo2="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        photo3="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg"
        title="Tasty Spicy Pizza"
        title2="Choco Brownies"
        title3="Spicy Rolls"
        year="2022"
      />
      <ScrollToTop smooth />
    </div>
  );
};

export default Food;
