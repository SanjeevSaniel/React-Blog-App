import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

const Fitness = () => {
  return (
    <div className="Fitness">
      <ArticlesVertical
        adLink="https://www.youtube.com/embed/Osd4DLpMNp4?autoplay=1&mute=1&controls=0&loop=1"
        adLink2="https://www.youtube.com/embed/uZX14W4rVCU/?autoplay=1&mute=1&controls=0&loop=1"
        adLink3="https://www.youtube.com/embed/CTkrrpF84Rw/?autoplay=1&mute=1&controls=0&loop=1"
        articleLink="https://www.healthline.com/health/fitness/10-ways-to-move-more"
        articleLink2="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389"
        articleLink3="https://www.pexels.com/photo/person-holding-barbell-841130/"
        adTitle="Exercise"
        adTitle2="Fitness"
        adTitle3="Activewear"
        category="Fitness"
        category2="Exercise"
        description="The health benefits of regular exercise and physical activity are hard to ignore. Everyone benefits from exercise, regardless of age, sex or physical ability."
        description3="It can feel overwhelming when you’re trying to make time for exercise. Here are some tips I give my physical therapy patients… and how I manage to keep myself moving."
        photo="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        photo2="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        photo3="https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="7 benefits of regular physical activity"
        title2="Gym Exercise"
        title3="10 Ways to Move More in Everyday Life"
        year="2022"
      />
      <ScrollToTop smooth />
    </div>
  );
};

export default Fitness;
