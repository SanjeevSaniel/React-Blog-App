import "../TopPosts/TopPosts.css";

const TopPosts = () => {
  return (
    <div className="top-posts-container">
      <h1 className="tp-heading">Top Posts</h1>
      <hr className="tp-hr" />
      <div className="tp-container">
        <div className="tp-images"></div>
        <div className="tp-images-caption">
          <p className="title">Catch waves with an adventure guide</p>
          <p className="number-1">1</p>
          <p className="tp-images-date">
            <span className="category">Travel</span>
            <span> / October 3 2022</span>
          </p>
        </div>
      </div>
      <hr className="tp-hr-wide" />
      <div className="tp-posts-container-small">
        <div className="tp-container-small">
          <div className="tp-images-small"></div>
          <span className="tp-images-caption-small">
            <span className="title">Catch waves with an adventure guide</span>
            <span className="number-2">2</span>
            <p className="tp-images-date">
              <span className="category">Travel</span>
              <span> / October 3 2022</span>
            </p>
          </span>
        </div>
      </div>
      <hr className="tp-hr-wide" />
      <div className="tp-posts-container-small">
        <div className="tp-container-small">
          <div className="tp-images-small"></div>
          <span className="tp-images-caption-small">
            <span className="title">Catch waves with an adventure guide</span>
            <span className="number-2">3</span>
            <p className="tp-images-date">
              <span className="category">Travel</span>
              <span> / October 3 2022</span>
            </p>
          </span>
        </div>
      </div>
      <hr className="tp-hr-wide" />
      <div className="tp-posts-container-small">
        <div className="tp-container-small">
          <div className="tp-images-small"></div>
          <span className="tp-images-caption-small">
            <span className="title">Catch waves with an adventure guide</span>
            <span className="number-2">4</span>
            <p className="tp-images-date">
              <span className="category">Travel</span>
              <span> / October 3 2022</span>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopPosts;
