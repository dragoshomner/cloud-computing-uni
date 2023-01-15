import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const AddBlogArticle = () => {
  const navigate = useNavigate();
  const [article, setArticle] = React.useState({isPublic: false});

  const handleAddArticle = () => {
    axios.post(`${BASE_URL}/blog`, article).then(() => {
      navigate(`/`);
    });
  };
  return (
    <div>
      <h1>Add Blog Article</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        onChange={(e) => setArticle({ ...article, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        onChange={(e) => setArticle({ ...article, imageUrl: e.target.value })}
      />
      <input
        type="checkbox"
        id="isPublic"
        onChange={(e) =>
          setArticle({
            ...article,
            isPublic: e.target.checked,
          })
        }
      />
      <label htmlFor="isPublic">Publish in newspaper</label>
      <button onClick={handleAddArticle}>Add Article</button>
    </div>
  );
};
