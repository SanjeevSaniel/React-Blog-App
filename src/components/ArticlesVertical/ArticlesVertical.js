// import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TopPosts from "../TopPosts/TopPosts";
import "../ArticlesVertical/ArticlesVertical.css";
import "../TopPosts/TopPosts.css";

const ArticlesVertical = ({
  photo,
  photo2,
  title,
  title2,
  description,
  year,
  photo3,
  title3,
  description3,
  adTitle,
  adLink,
  adTitle2,
  adLink2,
  adTitle3,
  adLink3,
  category,
  category2,
  articleLink,
  articleLink2,
  articleLink3,
}) => {
  return (
    <main className="vh-main-container">
      <h1 className="vh-heading">Latest Articles</h1>
      <hr className="vh-hr" />
      <main className="vh-main-container-internal">
        <div>
          <Divider />
          <div className="vh-container">
            <div
              className="vh-images"
              style={{ backgroundImage: `url(${photo3})` }}
            ></div>
            <div className="vh-images-caption">
              <h1 className="title">
                <a href={articleLink}>{title3}</a>
              </h1>
              <p className="description">{description3}</p>
              <p className="vh-images-date">
                <span className="category">{category}</span>
                <span> / October 7 {year}</span>
              </p>
            </div>
          </div>
          <Divider />
          <div className="vh-container">
            <div
              className="vh-images"
              style={{ backgroundImage: `url(${photo3})` }}
            ></div>
            <div className="vh-images-caption">
              <h1 className="title">
                <a href={articleLink}>{title3}</a>
              </h1>
              <p className="description">{description3}</p>
              <p className="vh-images-date">
                <span className="category">{category}</span>
                <span> / October 5 {year}</span>
              </p>
            </div>
          </div>
          <Divider />
          <div className="vh-container">
            <div
              className="vh-images"
              style={{ backgroundImage: `url(${photo})` }}
            ></div>
            <div className="vh-images-caption">
              <h1 className="title">
                <a href={articleLink2}>{title}</a>
              </h1>
              <p className="description">{description}</p>
              <p className="vh-images-date">
                <span className="category">{category2}</span>
                <span> / October 3 {year}</span>
              </p>
            </div>
          </div>
          <Divider />
          <div className="vh-container">
            <div
              className="vh-images"
              style={{ backgroundImage: `url(${photo})` }}
            ></div>
            <div className="vh-images-caption">
              <h1 className="title">
                <a href={articleLink2}>{title}</a>
              </h1>
              <p className="description">{description}</p>
              <p className="vh-images-date">
                <span className="category">{category2}</span>
                <span> / October 3 {year}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="ad-box">
          <h2>Advertisement</h2> <br />
          <iframe title={adTitle} src={adLink} frameBorder="0"></iframe>
          <iframe title={adTitle2} src={adLink2} frameBorder="0"></iframe>
          <iframe title={adTitle3} src={adLink3} frameBorder="0"></iframe>
        </div>
      </main>

      <TopPosts
        photo={photo2}
        title={title2}
        category={category2}
        // articleLink="https://www.techradar.com/news/microsoft-teams-users-are-using-it-to-send-confidential-business-data"
        articleLink={articleLink3}
      />
    </main>
  );
};

export default ArticlesVertical;
