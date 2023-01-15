import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

export const AddNewspaper = () => {
  const navigate = useNavigate();
  const [newspaper, setNewspaper] = React.useState();

  const handleAddArticle = () => {
    axios.post(`${BASE_URL}/newspaper`, newspaper).then(() => {
      navigate(`/newspapers`);
    });
  };

  return (
    <div>
      <h1>Add Newspaper</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setNewspaper({ ...newspaper, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Owner"
        onChange={(e) =>
          setNewspaper({ ...newspaper, owner: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Year of release"
        onChange={(e) =>
          setNewspaper({ ...newspaper, yearOfRelease: e.target.value })
        }
      />
      <button onClick={handleAddArticle}>Add Newspaper</button>
    </div>
  );
};
