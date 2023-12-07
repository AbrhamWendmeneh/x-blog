import React from "react";
import "./styles.css";
const Article = ({ article, onDelete }) => {
  return (
    <div className="card">
      <article>
        <figure className="figure-container">
          <img src={article.imageUrl} alt="Artcile" />
        </figure>
        <div className="article-body">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p className="author">{article.author}</p>
          <div className="div-delete">
            <button
              className="delete-button"
              onClick={() => onDelete(article.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
