import React, { useState, useEffect } from "react";
import "../ArticlesHorizontal/ArticlesHorizontal.css";

const ArticlesHorizontal = ({ apiData }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(apiData);
  }, [apiData]);

  return (
    <main className="ah-main-container">
      <h1 className="ah-heading">The Latest</h1>
      <hr className="ah-hr" />
      <div className="ah-container">
        {articles.map((article) => {
          return (
            <figure className="ah-images-container">
              <img className="ah-images" src={article.url} alt={article.alt} />
              <figcaption className="ah-images-caption">
                <a className="ah-link" href={article.link}>{article.caption}</a>
                <p>{article.about}</p>
              </figcaption>
              <p className="ah-images-date">
                <span className="category">{article.category}</span>
                <span> / {article.date}</span>
              </p>
            </figure>
          );
        })}
      </div>
    </main>
  );
};

export default ArticlesHorizontal;
