import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const Article = () => {
  const [article, setArticle] = React.useState();
  const { articleId } = useParams();

  React.useEffect(() => {
    getArticle();
  }, []);

  const getArticle = () => {
    axios.get(`${BASE_URL}/blog/${articleId}`).then((response) => {
      setArticle(response.data);
    });
  };

  return (
    <div>
      <h1>Article</h1>
      { article && (
        <>
            <img src={article.imageUrl} alt={article.title} />
            <h2>{article?.title}</h2>
            <p>Critics prizes: {article.numberOfLikes}</p>
            <p>Contest attendances: {article.numberOfViews}</p>
            <p>Shares: {article.numberOfShares}</p>
            <p>{article?.content}</p>
        </>
      )}
    </div>
  );
};
