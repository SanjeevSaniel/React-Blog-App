import Divider from "@mui/material/Divider";
import "../LatestStories/LatestStories.css";

const LatestStories = () => {
  return (
    <div className="latest-stories-container">
      <h1 className="ls-heading">Latest Stories</h1>
      <hr className="ls-hr" />
      <Divider />
      <div className="latest-stories">
        <div className="latest-stories-info latest-stories-one">
          <h1 className="title">Catch waves with an adventure guide</h1>
          <p className="description">
            Gujarat is vastly underrated and it's a mystery to us why the region
            isn't more well-known as a tourist destination.
          </p>
          <p className="date">
            <span className="category">Tech</span>
            <span> / October 3 2022</span>
          </p>
        </div>
        <div className="latest-stories-info latest-stories-two">
          <h1 className="title">Catch waves with an adventure guide</h1>
          <p className="description">
            Gujarat is vastly underrated and it's a mystery to us why the region
            isn't more well-known as a tourist destination.
          </p>
          <p className="date">
            <span className="category">Style</span>
            <span> / October 3 2022</span>
          </p>
        </div>
        <div className="latest-stories-info latest-stories-three">
          <h1 className="title">Catch waves with an adventure guide</h1>
          <p className="description">
            Gujarat is vastly underrated and it's a mystery to us why the region
            isn't more well-known as a tourist destination.
          </p>
          <p className="date">
            <span className="category">Tech</span>
            <span> / October 3 2022</span>
          </p>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default LatestStories;
