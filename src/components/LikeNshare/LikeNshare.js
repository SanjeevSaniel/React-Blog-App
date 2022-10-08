import "../LikeNshare/LikeNshare.css";
import Like from "../LikeNshare/images/rythm.png";
import Share from "../LikeNshare/images/share.png";

const LikeNshare = () => {
  return (
    <div className="like-n-share">
      <div className="like-container">
        <img className="like-button" src={Like} alt="Like Button" />
        <span className="like-count">9.3K</span>
      </div>
      <div className="share-container">
        <img className="share-button" src={Share} alt="Share Button" />
        <span className="share-text">Share this article</span>
      </div>
    </div>
  );
};

export default LikeNshare;
