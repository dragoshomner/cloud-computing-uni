import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

export const Blog = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = React.useState();

  React.useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    axios.get(`${BASE_URL}/blog`).then((response) => {
      setArticles(response.data);
    });
  };

  return (
    <div>
      <h1>Blog</h1>
      <button
        onClick={() =>
          navigate(`/blog/add`)
        }
      >
        Add article
      </button>
      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <img src={article.imageUrl} alt={article.title} />
            <h2 onClick={() => navigate(`/article/${article.id}`)}>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
    </div>
  );
};
