import "../TopPosts/TopPosts.css";

const TopPosts = ({ photo, title, category, date, articleLink }) => {
  return (
    <div className="top-posts-container">
      <div className="top-posts-header">
        <h1 className="tp-heading">Top Posts</h1>
        <hr className="tp-hr" />
      </div>
      <div className="tp-container">
        <div
          className="tp-images"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className="tp-images-caption">
          <p className="title">
            <a href={articleLink}>{title}</a>
          </p>
          <p className="number-1">1</p>
          <p className="tp-images-date">
            <span className="category">{category}</span>
            <span> / {date}</span>
          </p>
        </div>
      </div>
      <hr className="tp-hr-wide" />
      <div className="tp-posts-container-small">
        <div className="tp-container-small">
          <div className="tp-container-small-internal">
            <div
              className="tp-images-small"
              style={{ backgroundImage: `url(${photo})` }}
            ></div>
            <span className="tp-images-caption-small">
              <span className="title">
                <a href={articleLink}>{title}</a>
              </span>
              <span className="number-2">2</span>
            </span>
          </div>
          <p className="tp-images-date">
            <span className="category">{category}</span>
            <span> / {date}</span>
          </p>
        </div>
      </div>
      <hr className="tp-hr-wide" />
      <div className="tp-posts-container-small">
        <div className="tp-container-small">
          <div className="tp-container-small-internal">
            <div
              className="tp-images-small"
              style={{ backgroundImage: `url(${photo})` }}
            ></div>
            <span className="tp-images-caption-small">
              <span className="title">
                <a href={articleLink}>{title}</a>
              </span>
              <span className="number-2">3</span>
            </span>
          </div>
          <p className="tp-images-date">
            <span className="category">{category}</span>
            <span> / {date}</span>
          </p>
        </div>
      </div>
      <hr className="tp-hr-wide" />
      <div className="tp-posts-container-small">
        <div className="tp-container-small">
          <div className="tp-container-small-internal">
            <div
              className="tp-images-small"
              style={{ backgroundImage: `url(${photo})` }}
            ></div>
            <span className="tp-images-caption-small">
              <span className="title">
                <a href={articleLink}>{title}</a>
              </span>
              <span className="number-2">4</span>
            </span>
          </div>
          <p className="tp-images-date">
            <span className="category">{category}</span>
            <span> / {date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopPosts;
