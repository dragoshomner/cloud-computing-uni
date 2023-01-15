import React from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

export const NewspaperProfile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { newspaperName: newspaperNameState } = state;
  const { newspaperId } = useParams();
  const [articles, setArticles] = React.useState();

  React.useEffect(() => {
    getNewspapers();
  }, []);

  const getNewspapers = () => {
    axios.get(`${BASE_URL}/newspaper/${newspaperId}/blogs`).then((response) => {
      setArticles(response.data);
    });
  };

  return (
    <div>
      <h1>{newspaperNameState} Profile</h1>
      {newspaperId > 1 && <button
        onClick={() =>
          navigate(`/newspaper/${newspaperId}/article/add`, {
            state: { newspaperName: newspaperNameState },
          })
        }
      >
        Add article
      </button>}
      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <h2
              onClick={() =>
                navigate(
                  `/newspaper/${article.newspaperId}/article/${article.id}`
                )
              }
            >
              {article.title}
            </h2>
          </div>
        ))}
    </div>
  );
};
