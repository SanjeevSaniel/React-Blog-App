import NavbarWithBtn from "../NavbarWithBtn/NavbarWithBtn";
import LikeNshare from "../LikeNshare/LikeNshare";
import AuthorNsocial from "../Author-N-Social/AuthorNsocial";
import "../Information/Information1.css";
import image1 from "../ImageGallery/images/pexels-daniel-shi-2886202.jpg";

const Information1 = () => {
  return (
    <div className="information-container">
      <NavbarWithBtn />
      <br /><br /><br /><br /><br />
      <LikeNshare />
      <section className="information-section">
        <h1>Lake Louise, AB, Canada</h1>
        <AuthorNsocial />
        <img className="image-1" src={image1} alt="" />
        <p className="about">
          See the Canadian Rockies from a different perspective by taking the
          Lake Minnewanka Cruise on Banff National Park's largest lake. The lake
          is 28 kilometres long, and the only lake in Banff National Park open
          to public motorized boating. Tours are available from mid-May to
          mid-October. As you glide over the emerald waters and beside dramatic
          mountains you will be given an interpretive presentation about the
          unique cultural and archeological history of the area. Learn about why
          the First Nations’ name for the lake is “Lake of the Water Spirits”
          and what happened when a dam was constructed and a local settlement
          submerged.{" "}
        </p>
      </section>
    </div>
  );
};

export default Information1;
