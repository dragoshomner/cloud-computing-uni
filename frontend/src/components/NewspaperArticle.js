import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

export const NewspaperArticle = () => {
  const { newspaperId, articleId } = useParams();
  const [article, setArticle] = React.useState();

  React.useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    axios
      .get(`${BASE_URL}/newspaper/${newspaperId}/blogs/${articleId}`)
      .then((response) => {
        setArticle(response.data);
      });
  };

  return (
    <div>
      <h1>Newspaper Article</h1>
        {article && (
            <>
                <img src={article.imageUrl} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.content}</p>
            </>
        )}
    </div>
  );
};
