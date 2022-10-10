// import axios from "axios";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import TopPosts from "../TopPosts/TopPosts";
import "../ArticlesVertical/ArticlesVertical.css";
import "../TopPosts/TopPosts.css";

const ArticlesVertical = ({
  apiData,
  photo,
  title,
  adLink,
  category,
  articleLink,
}) => {
  const [articles, setArticles] = useState([]);
  const [adLinks, setAdLinks] = useState([]);

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
    setArticles(apiData);
  }, [apiData]);

  useEffect(() => {
    setAdLinks(adLink);
  }, [adLink]);

  const showMoreArticles = () => {
    setVisible((previousValue) => previousValue + 4);
  };

  return (
    <main className="vh-main-container">
      <h1 className="vh-heading">Latest Articles</h1>
      <hr className="vh-hr" />
      <main className="vh-main-container-internal">
        {articles.slice(0, visible).map((article) => {
          return (
            <div>
              <Divider />
              <div className="vh-container">
                <div
                  className="vh-images"
                  style={{ backgroundImage: `url(${article.photoUrl})` }}
                ></div>
                <div className="vh-images-caption">
                  <h1 className="title">
                    <a href={article.link}>{article.title}</a>
                  </h1>
                  <p className="description">{article.description}</p>
                  <p className="vh-images-date">
                    <span className="category">{article.category}</span>
                    <span> / October 7 {article.year}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="ad-box">
          <h2>Advertisement</h2> <br />
          {adLinks.map((adLink) => {
            return (
              <iframe
                title={adLink.title}
                src={adLink.link}
                frameBorder="0"
              ></iframe>
            );
          })}
        </div>
      </main>

      <button className="load-more-btn" onClick={showMoreArticles}>
        Load More
      </button>

      <TopPosts
        photo={photo}
        title={title}
        category={category}
        articleLink={articleLink}
      />
    </main>
  );
};

export default ArticlesVertical;
