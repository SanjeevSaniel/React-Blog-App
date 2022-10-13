// import axios from "axios";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import TopPosts from "../TopPosts/TopPosts";
import "../ArticlesVertical/ArticlesVertical.css";
import "../TopPosts/TopPosts.css";

const ArticlesVertical = ({
  articles,
  photo,
  title,
  ads,
  category,
  date,
  articleLink,
}) => {
  const [articlesData, setArticlesData] = useState([]);
  const [adsData, setAdsData] = useState([]);

  const [visible, setVisible] = useState(4);

  // const fetchData = () => {
  //   fetch("./Articles.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data.results));
  // };

  useEffect(() => {
    // fetchData();
    setArticlesData(articles);
  }, [articles]);

  useEffect(() => {
    setAdsData(ads);
  }, [ads]);

  const showMoreArticles = () => {
    setVisible((previousValue) => previousValue + 4);
  };

  return (
    <main className="vh-main-container">
      <div className="vh-header">
        <h1 className="vh-heading">Latest Articles</h1>
        <hr className="vh-hr" />
      </div>
      <main className="vh-main-container-internal">
        {articlesData.slice(0, visible).map((articleData, index) => {
          return (
            <div key={index}>
              <Divider />
              <div className="vh-container">
                <div
                  className="vh-images"
                  style={{ backgroundImage: `url(${articleData.photoUrl})` }}
                ></div>
                <div className="vh-images-caption">
                  <h1 className="title">
                    <a href={articleData.link}>{articleData.title}</a>
                  </h1>
                  <p className="description">{articleData.description}</p>
                  <p className="vh-images-date">
                    <span className="category">{articleData.category}</span>
                    <span> / {articleData.date}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <button className="load-more-btn" onClick={showMoreArticles}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2267/2267918.png"
            alt=""
          />
          Load More
        </button>

        <div className="ad-box">
          <h2>Advertisement</h2> <br />
          {adsData.map((data) => {
            return (
              <iframe
                title={data.title}
                src={data.link}
                frameBorder="0"
              ></iframe>
            );
          })}
        </div>
      </main>

      <TopPosts
        photo={photo}
        title={title}
        category={category}
        articleLink={articleLink}
        date={date}
      />
    </main>
  );
};

export default ArticlesVertical;
