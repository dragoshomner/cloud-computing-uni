import React from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

export const AddNewspaperArticle = () => {
  const navigate = useNavigate();
  const { state: currentState } = useLocation();
  const [article, setArticle] = React.useState();
  const { newspaperId } = useParams();

  const handleAddArticle = () => {
    axios
      .post(`${BASE_URL}/newspaper/${newspaperId}/blogs`, article)
      .then(() => {
        navigate(`/newspaper/${newspaperId}`, {
          state: { newspaperName: currentState.newspaperName },
        });
      });
  };

  return (
    <div>
      <h1>Add {currentState.newspaperName} Article</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Content"
        onChange={(e) => setArticle({ ...article, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        onChange={(e) => setArticle({ ...article, imageUrl: e.target.value })}
      />
      <button onClick={handleAddArticle}>Add Article</button>
    </div>
  );
};
